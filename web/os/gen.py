#!/usr/bin/python3

from datetime import datetime
from json import load

# Importing JSON
try:
    with open('data.json') as file:
        data = load(file)
except FileNotFoundError:
    exit('Please clone the whole repository and try again.')

output = open('output.html', 'w')


def html(tabs, string):
    output.write(' '*4*tabs + string + "\n")


def days(d1, d2):
    d1 = datetime.strptime(d1, "%Y-%m-%d")
    d2 = datetime.strptime(d2, "%Y-%m-%d")
    return abs((d2 - d1).days)


html(0, '<div style="font-family: sans-serif;">')
for machine in data:
    html(1, '<div style="float: left;">')
    html(2, '<div class="block">')
    html(3, '<p>{}</p>'.format(machine))
    html(2, '</div>')
    for setup in data[machine]:
        su_data = data[machine][setup]
        for os in [item for item in su_data if item not in ["start", "end"]]:
            colour = su_data[os]['col']
            height = days(su_data["start"], su_data["end"])
            print(height)
            # print(
            html(1, '<div class="block" id="{}" style="height: {}px">'.format(colour, height))
            html(2, '<p>{}</p>'.format(os))
            html(1, '</div>')
    html(1, '</div>')
html(0, '</div>')

# Problem you've ran into here is that JSON is an unordered dictionary when
# imported into python. This mean that every time it's generated the systems
# will show up in an opposite order. Need to find a different data storage
# format or find a way to fix JSON ordereding

output.close()
