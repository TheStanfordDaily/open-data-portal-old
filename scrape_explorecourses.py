#TODO: Delete duplicates, make sure other classes added (e.g. Community Global Health), get instructors, get quarters offered, get multiple years

import urllib, csv, ssl

departments = []

fp = urllib.urlopen("https://explorecourses.stanford.edu", context=ssl._create_unverified_context())
mybytes = fp.read()

mystr0 = mybytes.decode("utf8")
fp.close()
dept = 'test'
while dept != '':
    dept_start = mystr0.find("q=") + 2
    dept_end = dept_start + mystr0[dept_start:].find("&filter")
    dept = mystr0[dept_start:dept_end]
    departments.append(dept)
    mystr0 = mystr0[dept_end:]
    if (dept == "MLA"):
        break
classes = []

for dept in departments: 

    fp = urllib.urlopen("https://explorecourses.stanford.edu/print?q=" + dept + "&descriptions=on&filter-term-Winter=on&academicYear=&filter-term-Summer=on&filter-departmentcode-" + dept + "=on&filter-term-Autumn=on&filter-term-Spring=on&page=0&filter-coursestatus-Active=on&catalog=", context=ssl._create_unverified_context())
    print(fp)
    mybytes = fp.read()

    mystr = mybytes.decode("utf8")
    fp.close()

    #get number of courses
    num_start = mystr.find("<td id=\"numResults\">") + 20
    num_end = num_start + mystr[num_start:].find("courses")
    num_start = num_end - 5
    num = int(mystr[num_start:num_end])
    print(num)

    for j in range(0, num):

        #get number
        number_start = mystr.find("<span class=\"courseNumber\">") + 27
        number_end = number_start+ mystr[number_start:].find("</span>") - 1
        number = mystr[number_start:number_end]
        print(number)

        #get name
        title_start = mystr.find("<span class=\"courseTitle\">") + 26
        title_end = title_start+ mystr[title_start:].find("</span>")
        title = mystr[title_start:title_end].encode('utf-8')
        print(title)

        #get description
        description_start = mystr.find("<div class=\"courseDescription\">") + 31
        description_end = description_start+ mystr[description_start:].find("</div>")
        description = mystr[description_start:description_end].encode('utf-8')
        print(description)

        #get units
        units_start = mystr.find("Units: ") + 7
        units_end = units_start + 8
        units = mystr[units_start:units_end]
        print(units)

        mystr = mystr[units_start:]

        entry = [number, title, description, units]
        classes.append(entry)

with open('classes_1819.csv', mode='w') as writeFile:
    fieldnames = ['Number', 'Title', 'Description', 'Units']
    writer = csv.DictWriter(writeFile, fieldnames = fieldnames)
    writer.writeheader()
    for entry in classes:
        writer.writerow({'Number': entry[0], 'Title': entry[1], 'Description': entry[2], 'Units': entry[3]})

