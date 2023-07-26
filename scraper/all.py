import json

with open("out.json", "r") as file:
    courses = json.loads(file.read())

with open("ratings.json", "r") as file:
    ratings = json.loads(file.read())

with open("professors.json", "r") as file:
    professors = json.loads(file.read())

all = []

def stripAccent(s:str):
    s = s.replace("\u00e9", "e") # * removes é
    s = s.replace("\u00e8", "e") # * removes è
    s = s.replace("\u00e2", "a") # * removes â
    s = s.replace("\u00e7", "c") # * removes ç
    s = s.replace("\u00e0", "a") # * removes à
    s = s.replace("\u0000", "") # * removes null character

    return s
    

for course in courses:
    prof = stripAccent(course["lecture"]["prof"])
    rating = next((i for i in ratings if i["prof"] == prof), {})

    new = {}
    new = course.copy()
    new["lecture"]["rating"] = rating
    new["lecture"]["prof"] = stripAccent(new["lecture"]["prof"])
    new["lecture"]["title"] = stripAccent(new["lecture"]["title"])

    if "prof" in course["lab"]:
        lectProf = stripAccent(course["lab"]["prof"])
        lectRating = next((i for i in ratings if i["prof"] == lectProf), {})

        new["lab"]["rating"] = lectRating
        new["lab"]["prof"] = stripAccent(new["lab"]["prof"])
        new["lab"]["title"] = stripAccent(new["lab"]["title"])

    all.append(new)


    
with open("all.json", "w") as file:
    file.write(json.dumps(all, indent=2))
