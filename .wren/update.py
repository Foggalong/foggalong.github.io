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
    tmp = [i for i in tmp if search("[^a-z0-9]", i) is None]
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
print("Summary:", summary, "\n")

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
    for x in range(0, len(catnames)-1):
        file.write(catnames[x] + "," + catcount[x])


# This inserts a single line of HTML which links to the new
# blog into each of the catagory lists which it falls into.

newline = '<li><a href="../{0}/{1}">{2}     {3}</a></li>'
newline = newline.format(filedate, urltitle, datesmll, title)
for cat in (catagories + ["all"]):
    with open("../blog/cat/" + cat + ".html", "r") as file:
        lines = [line for line in file]
    for line in lines:
        if "<!-- List Begins Here -->" in line:
            n = file_list.index(line)
            file_list.insert(n + 1, ' ' * 12 + newline + "\n")
    catfile = open("../blog/cat/" + cat + ".html", "w")
    catfile.truncate()
    for line in lines:
        catfile.write(line)
    catfile.close()
    print("Added blog to", cat, "catagory list")


# The main blogs page lists the 5 most recent blogs posted so
# adding this new one means also removing the least recent.

newline = " " * 4 + '<h3> <a href="blogs/{0}_{1}>{2}</a> - {3}</h3>'
newlines = [
    "<article>",
    newline.format(filedate, urltitle, title, datesmll),
    " " * 4 + '<p>' + summary + '</p>',
    "</article>\n",
    '<br class="small">\n'
]

with open("../blog/index.html", 'r') as file:
    lines = [line for line in file]
for line in lines:
    if "<!-- Recent Blogs Begin Here -->" in line:
        n = lines.index(line)
        for x in range(0, 4):
            lines.insert(x+1, " " * 8 + newlines[x] + "\n")
    elif "<!-- Recent Blogs End Here -->" in line:
        n = lines.index(line)
        for x in range(1, 8):
            lines.pop(n-x)
blogfile = open("blog", 'w')
blogfile.truncate()
for line in file_list:
    blogfile.write(line)
blogfile.close()
print("Updated the main blogs page")


# TODO
# ====
# + Update the word cloud
# + Update the RSS feeds
# + Creat the blog file

# Program is finished!
print("Done!\n")
