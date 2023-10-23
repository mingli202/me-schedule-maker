import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FormEvent, useMemo, useRef, useState } from "react";

import { Class } from "../../../../types";

type Props = {
  setInput: Dispatch<React.SetStateAction<string>>;
  setCurrent: Dispatch<React.SetStateAction<"filter" | "search" | "saved">>;
  aucmpData: object;
};

export default function Filter({ setInput, setCurrent, aucmpData }: Props) {
  const [hover, setHover] = useState(false);

  // for form data
  const [courseName, setCourseName] = useState("");
  const [code, setCode] = useState("");
  const [className, setClassName] = useState("");
  const ref = useRef<HTMLFormElement>(null);

  // helper function to get checkboxes
  function getEl(el: string) {
    return ref.current?.elements.namedItem(el) as HTMLInputElement;
  }

  /*
   * used for autocomplete
   * made with hierarchie so that the course name is the highest, then code, then class name, then teachers
   * */
  const courseNames = useMemo(
    () =>
      [
        ...new Set(
          // get all coures names (e.g. BIOLOGY)
          Object.values(aucmpData).flatMap((value: object) => {
            return Object.keys(value);
          })
        ),
      ].sort(),
    [aucmpData]
  );

  const codes = useMemo(() => {
    // filter down course codes belonging to the course typed by user
    const courses = Object.values(aucmpData)
      .flatMap((v: object) => Object.entries(v))
      .filter((entry) =>
        entry[0].toLowerCase().includes(courseName.toLowerCase())
      );

    // return codes
    const toReturn = [
      ...new Set(courses.flatMap((c: [string, object]) => Object.keys(c[1]))),
    ].sort();
    return toReturn;
  }, [aucmpData, courseName]);

  const classNames = useMemo(() => {
    // filter down codes belonging to course typed by user
    const codes = Object.values(aucmpData)
      .flatMap((v: object) => Object.entries(v))
      .filter((entry) =>
        entry[0].toLowerCase().includes(courseName.toLowerCase())
      )
      .map((c: [string, object]) => c[1]);

    // classes with code typed by user
    const classes = codes
      .flatMap((c) => Object.entries(c))
      .filter((entry) => entry[0].toLowerCase().includes(code.toLowerCase()))
      .flatMap((c: [string, object]) => Object.values(c[1]) as Class[]);

    // title of class
    const titles = classes.map((e: Class) => e.lecture.title);

    const toReturn = [...new Set(titles)].sort();

    return toReturn;
  }, [aucmpData, courseName, code]);

  const teacherNames = useMemo(() => {
    // codes belonging to course typed
    const codes = Object.values(aucmpData)
      .flatMap((v: object) => Object.entries(v))
      .filter((entry) =>
        entry[0].toLowerCase().includes(courseName.toLowerCase())
      )
      .map((c: [string, object]) => c[1]);

    // classes belonging to code user typed
    const classes = codes
      .flatMap((c) => Object.entries(c))
      .filter((entry) => entry[0].toLowerCase().includes(code.toLowerCase()))
      .flatMap((c: [string, object]) => Object.values(c[1]) as Class[]);

    // classes with name typed by user
    const titles = classes.filter((c) => c.lecture.title.includes(className));

    // returns teachers
    const toReturn = [...new Set(titles.map((c) => c.lecture.prof))].sort();

    return toReturn;
  }, [aucmpData, courseName, code, className]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!ref.current) {
      setInput("");
      setCurrent("search");
      return;
    }

    // split teacher name and add p=
    const teacherName = getEl("teacherName")
      .value.split(" ")
      .flatMap((t) => t.split(","))
      .filter((t) => t !== "")
      .map((t) => `p=${t}`);

    const ratingMax = Number(getEl("ratingMax").value);
    const ratingMin = Number(getEl("ratingMin").value);
    const rating = [
      ratingMin ? `r>${ratingMin}` : "",
      ratingMax ? `r<${ratingMax}` : "",
    ];

    const scoreMax = Number(getEl("scoreMax").value);
    const scoreMin = Number(getEl("scoreMin").value);
    const score = [
      scoreMin ? `s>${scoreMin}` : "",
      scoreMax ? `s<${scoreMax}` : "",
    ];

    const checkbox = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "honours",
      "blended",
      "available",
    ]
      .map((d) => getEl(d).checked)
      .map((d, i) =>
        d ? ["M", "T", "W", "R", "F", "honours", "blended", "@"].at(i) : ""
      );

    const input = [
      courseName,
      code,
      className,
      ...teacherName,
      ...rating,
      ...score,
      ...checkbox,
    ];

    setInput(input.filter((k) => k !== "").join(", "));
    setCurrent("search");
  }

  return (
    <div className="box-border w-full h-full p-2 overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-base gap-4"
        ref={ref}
      >
        <label>
          <p className="font-semibold">Course Name</p>
          <input
            placeholder="English"
            className="outline-none focus:bg-c2 w-full rounded-lg p-1"
            name="courseName"
            list="course"
            autoComplete="off"
            onChange={(e) => setCourseName(e.target.value)}
          />
          <datalist id="course">
            {courseNames.map((k) => (
              <option value={k} key={k} />
            ))}
          </datalist>
        </label>

        <label>
          <p className="font-semibold">Code</p>
          <input
            placeholder="603-103-MQ"
            className="outline-none focus:bg-c2 w-full rounded-lg p-1"
            name="code"
            list="code"
            autoComplete="off"
            onChange={(e) => setCode(e.target.value)}
          />
          <datalist id="code">
            {codes.map((k) => (
              <option value={k} key={k} />
            ))}
          </datalist>
        </label>

        <label>
          <p className="font-semibold">Class Name</p>
          <input
            placeholder="Hockey is everything"
            className="outline-none focus:bg-c2 w-full rounded-lg p-1"
            name="className"
            onChange={(e) => setClassName(e.target.value)}
            list="classNames"
            autoComplete="off"
          />
          <datalist id="classNames">
            {classNames.map((k) => (
              <option value={k} key={k} />
            ))}
          </datalist>
        </label>

        <label>
          <p className="font-semibold">Teacher Name</p>
          <input
            placeholder="Patrick Burger"
            className="outline-none focus:bg-c2 w-full rounded-lg p-1"
            name="teacherName"
            list="teachers"
            autoComplete="off"
          />
          <datalist id="teachers">
            {teacherNames.map((k) => (
              <option value={k} key={k} />
            ))}
          </datalist>
        </label>

        <div className="flex gap-4 w-full">
          <label className="basis-1/2">
            <p className="font-semibold">Rating /5</p>
            <div className="flex gap-1 w-full">
              <div className="basis-full">
                <input
                  className="outline-none focus:bg-c2 w-full rounded-lg p-1"
                  placeholder="0"
                  name="ratingMin"
                  autoComplete="off"
                />
              </div>
              <p className="flex items-center">to</p>
              <div className="basis-full">
                <input
                  className="outline-none focus:bg-c2 w-full rounded-lg p-1"
                  placeholder="5"
                  name="ratingMax"
                  autoComplete="off"
                />
              </div>
            </div>
          </label>

          <label className="basis-1/2">
            <div className="font-semibold relative">
              Score /100
              {
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="ml-2"
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
                />
              }
              {hover && (
                <div className="absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex">
                  <p className="w-full">
                    The score is calculated to take into account the number of
                    raters. A high rating with low raters will perform worse in
                    comparison to a lower rating with many raters.
                  </p>
                </div>
              )}
            </div>
            <div className="flex gap-1 w-full">
              <div className="basis-full">
                <input
                  className="outline-none focus:bg-c2 w-full rounded-lg p-1"
                  placeholder="0"
                  name="scoreMin"
                  autoComplete="off"
                />
              </div>
              <p className="flex items-center">to</p>
              <div className="basis-full">
                <input
                  className="outline-none focus:bg-c2 w-full rounded-lg p-1"
                  placeholder="100"
                  name="scoreMax"
                  autoComplete="off"
                />
              </div>
            </div>
          </label>
        </div>

        <div className="flex gap-4">
          <div className="basis-1/2">
            <p className="font-semibold">Days</p>
            <p className="pl-4">
              <label>
                <input type="checkbox" name="monday" /> Monday
              </label>
            </p>
            <p className="pl-4">
              <label>
                <input type="checkbox" name="tuesday" /> Tuesday
              </label>
            </p>
            <p className="pl-4">
              <label>
                <input type="checkbox" name="wednesday" /> Wednesday
              </label>
            </p>
            <p className="pl-4">
              <label>
                <input type="checkbox" name="thursday" /> Thursday
              </label>
            </p>
            <p className="pl-4">
              <label>
                <input type="checkbox" name="friday" /> Friday
              </label>
            </p>
          </div>

          <div className="basis-1/2">
            <p className="font-semibold">Special</p>
            <p className="pl-4">
              <label>
                <input type="checkbox" name="honours" /> Honours
              </label>
            </p>

            <p className="pl-4">
              <label>
                <input type="checkbox" name="blended" /> Blended
              </label>
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Options</p>
          <p className="pl-4">
            <label>
              <input type="checkbox" name="available" /> Only show available
              classes
            </label>
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="reset"
            className="rounded-lg p-2 transition hover:outline-c9 outline outline-1 outline-c1"
          >
            Clear
          </button>
          <button
            type="submit"
            className="rounded-lg bg-c9 p-2 text-c1 transition hover:bg-c7"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
