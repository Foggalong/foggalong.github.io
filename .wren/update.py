#!/usr/bin/python3

# This is the updater for the Wren blogging platform.
# Before running this script please familiarise your-
# self with the instructions in the readme.md file.

from datetime import datetime
from math import floor
from os import getcwd
from re import search, sub
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
# YYYY/MM/DD
filedate = datesmll.replace("-", "/")
# Day DD Mon YYYY HH:MM:SS
datelong = datetime.ctime(datetime.now())
# Day, DD Mon YYYY HH:MM:SS TMZ
datelong = ", ".join(datelong.split(" ", 1)) + " GMT"


# Data used in URLs has to be devoid of any special characters
# that could cause problems. Because of that, characters not
# in the range a-z or 0-1 are removed from certain values.

def clean(string):
    tmp = list(string.lower().strip())
    tmp = [i for i in tmp if search("[^a-z0-9]", i) == None]
    return "".join(tmp)

urltitle = clean(title)

tmp = []
for item in catagories:
    item = clean(item)
    if len(item) != 0:
        tmp.append(item)
catagories = tmp


print("\nGIVEN INFORMATION")
print("Title:", title)
print("URL title:", urltitle)
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


with open("catdat.csv", "r") as file:
    catdat = [line.strip() for line in file]
catnames = [line.split(",")[0] for line in catdat]
catcount = [line.split(",")[1] for line in catdat]

catnames.pop(0)
catcount.pop(0)


newcat = []
for item in catagories:
    if item not in catnames:
        newcat.append(item)


def sed(find, replace, target):
    with open(target, "r") as file:
        lines = file.readlines()
    with open(target, "w") as file:
        for line in lines:
            file.write(sub(find, replace, line))

for cat in newcat:
    copy("feed-template.xml", "../blog/feeds/" + cat + ".xml")
    copy("cat-template.html", "../blog/cat/" + cat + ".html")
    sed("TEMPLATE", cat, "../blog/feeds/" + cat + ".xml")
    sed("TEMPLATE", cat, "../blog/cat/" + cat + ".html")
    catnames.append(cat)
    catcount.append(0)
    print("Created" + cat + "catagory")

for cat in catagories:
    pos = catnames.index(cat)
    count = catcount[pos] + 1
    catcount.pop(pos)
    catcount.insert(pos, count)

with open("catdat.csv", "w") as file:
    for x in range(0, len(catnames)-1)):
        file.write(catnames[x] + "," + catcount[x])



# Adding Blog to Catagory Lists
for entry in (catagories + ["all"]):
    with open("../blog/cat/" + entry + ".html", "r") as file:
        file_list = [line for line in file]
    for line in file_list:
        if "<!-- List Begins Here -->" in line:
            n = file_list.index(line)
            file_list.insert(n + 1, '            <li><a href="../' + filedate + '/'+ urltitle + '">' + datesmll + '     ' + title +'</a></li>\n')
    entry_list = open("../blog/cat/" + entry + ".html", "w")
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
