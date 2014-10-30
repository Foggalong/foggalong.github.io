#!/usr/bin/python3

# This is the updater for the Wren blogging platform.
# Before running this script please familiarise your-
# self with the instructions in the readme.md file.

from datetime import datetime
from math import floor
from os import getcwd
from shutil import copy
from sys import argv
from time import sleep


# Thes function allows for timeout when the Wren
# updater is run via the "Run In Terminal" command

def gerror(message):
    print("ERROR: {0}".format(message))
    sleep(3)
    exit(1)


# Checks running from the Wren directory so that
# the relative locations of files can be known

if ".wren" not in getcwd():
    gerror("please run from the .Wren directory")
else:
    print("Updating blog...")


with open("blog-new.html", 'r') as file:
    record, HTMLcontent = False, []
    for line in file:
        if "<article>" in line:
            record = True
        elif "</article>" in line:
            record = False
        elif record is True:
            HTMLcontent.append(line)


# Strips out the HTML tags and white space in order
# to calculate the approximate reading time.

TXTcontent = []
for line in HTMLcontent:
    raw = ''
    record = True
    for i in line:
        if i == "<":
            record = False
        elif i == ">":
            record = True
        elif record is True:
            raw += i
    TXTcontent.append(raw.strip())
text = " ".join(TXTcontent)


# This calculates the approximate reading time for
# the blog.

if len(text)/200 < 1:
    secs = int(float(len(text))*0.3)
    readtime = "~{0} seconds reading".format(secs)
else:
    mins = int(floor(len(text)/float(200)))
    secs = int(((len(text)/float(200))-mins)*60)
    readtime = "~{0} minutes {1} seconds reading".format(mins, secs)


print("Please enter the following data as prompted")
title = input("\nTitle:\n")
catagories = input("\nCatagories:\n").split(" ")
summary = input("\nSummary:\n")

# YYYY-MM-DD
datesmll = datetime.date(datetime.now())
# Day DD Mon YYYY HH:MM:SS
datelong = datetime.ctime(datetime.now())
# Day, DD Mon YYYY HH:MM:SS TMZ
datelong = ", ".join(datelong.split(" ", 1)) + " GMT"


print("\nGIVEN INFORMATION")
print("Title:", title)
print("Short date:", datesmll)
print("Long date:", datelong)
print("Catagories:", catagories)
print("Summary:", summary,"\n")

q = 0
while q == 0:
    ans = input("Are you happy with the above? (y/n) ")
    if ans == "y":
        q = 1
        pass
    elif ans == "n":
        gerror("meta data rejected")
print("Meta data accepted")

exit()


# Managing new catagories

for entry in new_catagories:
    # Creating New Lists
    entry_list = open("/home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/"+entry, 'w')
    entry_list.write(open("/home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/template").read())
    entry_list.close()
    with open("/home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/"+entry, 'r+') as file:
        new_list = [line for line in file]
    for line in new_list:
        if "[template]" in line:
            old_line, n = line, new_list.index(line)
            new_list.pop(n)
            new_list.insert(n, old_line.replace("[template]", entry))
    entry_list = open("/home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/"+entry, 'w')
    entry_list.truncate()
    for line in new_list:
        entry_list.write(line)
    entry_list.close()
    print("Created %s catagory" % entry)

# Adding to word cloud - untested
for entry in blog_catagories:
    with open("//home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/cloud.txt", 'r') as file:
        cat_list = [line for line in file]
    cat_list.append(entry+"\n")
    cloud_file = open("/home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/cloud.txt", 'w')
    for line in cat_list:
        cloud_file.write(line)
    cloud_file.close()
    print("Added %s catagory to word cloud file" % entry)


# Adding Blog to Catagory Lists
for entry in (blog_catagories+["all"]):
    with open("/home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/"+entry, 'r+') as file:
        file_list = [line for line in file]
    for line in file_list:
        if "<!-- List Begins Here -->" in line:
            n = file_list.index(line)
            file_list.insert(n+1, '            <li><a href="../'+blog_date+'_'+blog_title.replace(' ','')+'">'+blog_date+'     '+blog_title+'</a></li>\n')
    entry_list = open("/home/josh/Programs/Web/HTML/fogg.me.uk/blogs/Catagories/"+entry, 'w')
    entry_list.truncate()
    for line in file_list:
        entry_list.write(line)
    entry_list.close()
    print("Added blog to %s catagory list" % entry)


# Adding blog to Recent Blogs page
with open("/home/josh/Programs/Web/HTML/fogg.me.uk/blog", 'r+') as file:
    file_list = [line for line in file]
for line in file_list:
    if "<!-- Recent Blogs Begin Here -->" in line:
        n = file_list.index(line)
        file_list.insert(n+1, '        <article>\n')
        file_list.insert(n+2, '            <h3> <a href="blogs/'+blog_date+'_'+blog_title.replace(' ','')+'">'+blog_title+'</a> - '+blog_date+'</h3>\n')
        file_list.insert(n+3, '            <p>'+blog_summary+'</p>\n')
        file_list.insert(n+4, '        </article>\n')
        file_list.insert(n+5, '\n')
        file_list.insert(n+6, '        <br class="small">\n')
        file_list.insert(n+7, '\n')
entry_list = open("/home/josh/Programs/Web/HTML/fogg.me.uk/blog", 'w')
entry_list.truncate()
for line in file_list:
    entry_list.write(line)
entry_list.close()
print("Added blog to recent blogs page")


# Removing the least recent blog from Recent Blogs page
with open("/home/josh/Programs/Web/HTML/fogg.me.uk/blog", 'r+') as file:
    file_list = [line for line in file]
for line in file_list:
    if "<!-- Recent Blogs End Here -->" in line:
        n = file_list.index(line)
        for x in range(1, 8):
            file_list.pop(n-x)
entry_list = open("/home/josh/Programs/Web/HTML/fogg.me.uk/blog", 'w')
entry_list.truncate()
for line in file_list:
    entry_list.write(line)
entry_list.close()
print("Removed least recent blog from recent blogs page")


# Program is finished!
print("Done!\n")
