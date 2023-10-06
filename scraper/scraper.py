import json
import re


def writeToA():

    with open("winter-schedule-2023.txt", "rb") as file:
        lines = file.read()

    a = lines.decode("UTF-16")
    b = a.split("\n")

    def fn(s: str):
        if (
            s.strip() == ""
            or s.strip() == "SCHEDULE OF CLASSES - WINTER 2023"
            or re.match("^John Abbott College", s)
            or re.match("^SECTION", s)
        ):
            return False
        return True

    raw = list(filter(fn, b))

    with open("winter-a.json", "w") as file:
        file.write(json.dumps(raw, indent=2))


def writeToOut():
    with open("winter-a.json", "r") as file:
        raw = json.loads(file.read())

    program = ""
    course = ""
    codeHeader = ""
    code = ""
    section = ""
    more = ""
    disc = ""
    lecture = {}
    lab = {}

    time = ""
    day = ""

    Sections = []

    codeHeader2nLine = False

    sectionFormat = "[0-9][0-9][0-9][0-9][0-9]"

    timeFormat = "[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]"

    def handleSectionChange(
        section, disc, lecture, lab, more, code, program, course, codeHeader, count
    ):
        Sections.append(
            {
                "count": count,
                "program": program,
                "course": course,
                "code": code,
                "codeHeader": codeHeader,
                "section": section,
                "disc": disc,
                "lecture": lecture,
                "lab": lab,
                "more": more,
            }
        )

    count = 0

    for index, i in enumerate(raw):
        print(index)

        space = len(i) - len(i.lstrip())
        text = i.strip().replace("\u0000", "")
        a = list(filter(lambda i: i != "", i.split(" ")))

        # program
        if space >= 30 and not any([re.match(timeFormat, j) for j in a]):
            if text != program:
                handleSectionChange(
                    section,
                    disc,
                    lecture,
                    lab,
                    more,
                    code,
                    program,
                    course,
                    codeHeader,
                    count,
                )
                section = ""
                disc = ""
                lecture = {}
                lab = {}
                more = ""
                code = ""
                count += 1
                course = ""

            program = text

        # section line
        elif re.match(sectionFormat, text):
            if text != a[0]:
                handleSectionChange(
                    section,
                    disc,
                    lecture,
                    lab,
                    more,
                    code,
                    program,
                    course,
                    codeHeader,
                    count,
                )
                section = ""
                disc = ""
                lecture = {}
                lab = {}
                more = ""
                code = ""
                count += 1

            section, disc, code, *title, day, time = a
            lecture = {"title": " ".join(title), day.replace(
                "\u0000", ""): time.replace("\u0000", "")}

        # course
        elif text.isupper() and space == 0:
            if course != text:
                handleSectionChange(
                    section,
                    disc,
                    lecture,
                    lab,
                    more,
                    code,
                    program,
                    course,
                    codeHeader,
                    count,
                )
                section = ""
                disc = ""
                lecture = {}
                lab = {}
                more = ""
                code = ""
                count += 1

            course = text

        # codeHeader
        if space == 1:
            if codeHeader2nLine:
                codeHeader += f"\n{text}"
            else:
                if text not in codeHeader:
                    handleSectionChange(
                        section,
                        disc,
                        lecture,
                        lab,
                        more,
                        code,
                        program,
                        course,
                        codeHeader,
                        count,
                    )
                    section = ""
                    disc = ""
                    lecture = {}
                    lab = {}
                    more = ""
                    code = ""
                    count += 1

                codeHeader = text

            codeHeader2nLine = True
        else:
            codeHeader2nLine = False

        # lect line
        if re.match("^Lecture", text):
            if any([re.match(timeFormat, j) for j in a]):
                l, *prof, day, time = a

            else:
                l, *prof = a

            lecture.update({"prof": " ".join(prof), day.replace(
                "\u0000", ""): time.replace("\u0000", "")})

        # lab line
        elif space == 13:
            disc, code, *title, day, time = a
            lab = {"title": " ".join(title), day.replace(
                "\u0000", ""): time.replace("\u0000", "")}

        # lab
        elif re.match("^Laboratory", text):
            l, *prof = a
            lab.update({"prof": " ".join(prof)})

        else:
            if any([re.match(timeFormat, j) for j in a]):
                *l, day, time = a
                lecture.update({day.replace("\u0000", "")
                               : time.replace("\u0000", "")})
            elif space in [25, 26]:
                if re.match("^ADDITIONAL", text):
                    more += f"{text}\n"
                else:
                    more += f"{text} "

    handleSectionChange(
        section, disc, lecture, lab, more, code, program, course, codeHeader, count
    )

    def cond(obj):
        if obj["section"] == "":
            return False
        return True

    filtered = list(filter(cond, Sections))

    with open("winter-out.json", "w") as file:
        file.write(json.dumps(filtered, indent=2))

    data = {}

    for i in filtered:
        if i["program"] not in data:
            data[i["program"]] = {}

        if i["course"] not in data[i["program"]]:
            data[i["program"]][i["course"]] = {}

        if i["code"] not in data[i["program"]][i["course"]]:
            data[i["program"]][i["course"]][i["code"]] = {}

        data[i["program"]][i["course"]][i["code"]][i["section"]] = {
            "disc": i["disc"],
            "lecture": i["lecture"],
            "lab": i["lab"],
            "more": i["more"],
        }

    with open("winter-data.json", "w") as file:
        file.write(json.dumps(data, indent=2))


def modify():

    with open("winter-a.json", "w") as file:
        lines = json.loads(file.read())

        pass


if __name__ == "__main__":
    # writeToA()
    writeToOut()
    # modify()
