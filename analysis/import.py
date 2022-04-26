# WRITES EXCEL VALUES INTO QUESTIONS.JSON

import locale
import os
locale.setlocale(locale.LC_ALL, '')
import openpyxl
import json

# Settings
excelPath = os.path.abspath(__file__)[:-9] + "QuestionAnalysis.xlsx"
print("Excel path: " + excelPath) 
sheetName = "Sheet1"

types = [
    "LINEAR",
    "CIRCLE",
    "QUADRATIC",
    "CUBIC",
    "EXPONENTIAL",
    "LOGARITHMIC",
    "INVERSE",
    "ABSOLUTE",
    "SINECOSINE",
    "TANGENT",
    "SPIRAL"
]

jsonPath = os.path.abspath(__file__)[:-18] + "questions.json"
print("Json path: " + jsonPath)


# Excel stuff
book = openpyxl.load_workbook(excelPath)
sheet = book[sheetName]

# for i in range(startingX, startingX + width):
#     for j in range(startingY, startingY + height):
#         print(sheet.cell(i, j).value)

weights = []

# Cell values here, shouldn't change much though
for cells in sheet['C17':'M26']:
    weights.append([])
    for cell in cells:
        weights[-1].append(cell.value)

for weightList in weights:
    print(weightList)

book.close();

json_file = open(jsonPath)
json_object = json.load(json_file)

# print(json_object['questions'][0]['answerWeight']['LINEAR'])

for i in range(len(json_object['questions'])):
    for j in range(len(types)):
        json_object['questions'][i]['answerWeight'][types[j]] = weights[i][j]

# for question in json_object['questions']:
#     print(question['answerWeight'])

json_file.close()

json_file = open(jsonPath, 'w')
json.dump(json_object, json_file)

json_file.close()