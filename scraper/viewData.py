import json
import math


def handleViewData(targetClass: dict):
    c = dict(targetClass)

    col = ["M", "T", "W", "R", "F"]
    row = []

    for i in range(21):
        if i % 2 == 0:
            row.append(i * 50 + 800)
        else:
            row.append(math.floor(i / 2) * 2 * 50 + 830)

    lecture: dict[str, str] = dict(c["lecture"])
    lecture.pop("title", False)
    lecture.pop("prof", False)
    lecture.pop("rating", False)

    lab: dict[str, str] = dict(c["lab"])
    lab.pop("title", False)
    lab.pop("prof", False)
    lab.pop("rating", False)

    days = lecture | lab

    viewData = []

    for i in days:
        t = days[i]
        t = t.split("-")

        try:
            rowStart = row.index(int(t[0])) + 1
        except ValueError:
            rowStart = 1

        try:
            rowEnd = row.index(int(t[1])) + 1
        except ValueError:
            rowEnd = 21

        for d in i:
            if d == "S":
                continue

            colStart = col.index(d) + 1

            viewData.append({
                colStart: [rowStart, rowEnd]
            })

    c["viewData"] = viewData
    return c


example = {
    "count": 4,
    "program": "Science Courses",
    "course": "BIOLOGY",
    "code": "101-NYA-05",
    "codeHeader": "101-NYA-05",
    "section": "00001",
    "disc": "BIOL",
    "lecture": {
        "title": "General Biology I",
        "WF": "1300-1430",
        "prof": "Pagnucco, Katherine S.",
        "rating": {
            "prof": "Pagnucco, Katherine S.",
            "score": 74.3,
            "avg": 4.2,
            "nRating": 5.0,
            "takeAgain": 100.0,
            "difficulty": 2.6,
            "status": "found"
        }
    },
    "lab": {
        "title": "General Biology I",
        "M": "1230-1430",
        "prof": "Levesque, Christian",
        "rating": {
            "prof": "Levesque, Christian",
            "score": 72.7,
            "avg": 4.2,
            "nRating": 4.0,
            "takeAgain": 88.8889,
            "difficulty": 3.5,
            "status": "found"
        }
    },
    "more": "This course is not recommended for students in their first semester of the Science program or transitioning to the Science Program. "
}

handleViewData(example)

filename = "winter-all.json"

with open(filename, "r") as file:
    data = json.loads(file.read())

with open(filename, "w") as file:
    polished = list(map(handleViewData, data))

    file.write(json.dumps(polished, indent=2))
