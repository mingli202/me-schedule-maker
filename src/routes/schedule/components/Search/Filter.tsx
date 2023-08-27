import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, FormEvent, useRef, useState } from "react";

type Props = {
  setInput: Dispatch<React.SetStateAction<string>>;
  setCurrent: Dispatch<React.SetStateAction<"filter" | "search" | "saved">>;
};

export default function Filter({ setInput, setCurrent }: Props) {
  const [hover, setHover] = useState(false);

  const ref = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!ref.current) {
      setInput("");
      setCurrent("search");
      return;
    }

    const f = ref.current;

    function getEl(el: string) {
      return f.elements.namedItem(el) as HTMLInputElement;
    }

    const courseName = getEl("courseName").value.toUpperCase();

    const className = getEl("className").value;

    const teacherName = getEl("teacherName")
      .value.split(" ")
      .flatMap((t) => t.split(","))
      .filter((t) => t !== "")
      .map((t) => `p=${t}`);

    const ratingMax = Number(getEl("ratingMax").value);
    const ratingMin = Number(getEl("ratingMin").value);
    const rating = [
      ratingMin ? `r>${Math.min(ratingMin, ratingMax)}` : "",
      ratingMax ? `r<${Math.max(ratingMax, ratingMin)}` : "",
    ];

    const scoreMax = Number(getEl("scoreMax").value);
    const scoreMin = Number(getEl("scoreMin").value);
    const score = [
      scoreMin ? `r>${Math.min(scoreMin, scoreMax)}` : "",
      scoreMax ? `r<${Math.max(scoreMax, scoreMin)}` : "",
    ];

    const checkbox = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "honours",
      "blended",
    ]
      .map((d) => getEl(d).checked)
      .map((d, i) =>
        d ? ["M", "T", "W", "R", "F", "honours", "blended"].at(i) : ""
      );

    const input = [
      courseName,
      className,
      ...teacherName,
      ...rating,
      ...score,
      ...checkbox,
    ];
    console.log(input);

    setInput(input.filter((k) => k !== "").join(","));
    setCurrent("search");
  }

  return (
    <div className="box-border w-full h-full p-2 overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:text-xl text-base gap-4"
        ref={ref}
      >
        <label>
          <p className="font-semibold">Course Name or Code</p>
          <input
            placeholder="English"
            className="outline-none focus:bg-c2 w-full rounded-lg p-1"
            name="courseName"
          />
        </label>

        <label>
          <p className="font-semibold">Class Name</p>
          <input
            placeholder="Hockey is everything"
            className="outline-none focus:bg-c2 w-full rounded-lg p-1"
            name="className"
          />
        </label>

        <label>
          <p className="font-semibold">Teacher Name</p>
          <input
            placeholder="Patrik Burger"
            className="outline-none focus:bg-c2 w-full rounded-lg p-1"
            name="teacherName"
          />
        </label>

        <div className="flex gap-4 w-full">
          <label className="basis-1/2">
            <p className="font-semibold">Rating /5</p>
            <div className="flex gap-1 w-full">
              <div className="basis-full">
                <input
                  className="outline-none focus:bg-c2 w-full rounded-lg p-1"
                  placeholder="4"
                  name="ratingMin"
                />
              </div>
              <p className="flex items-center">to</p>
              <div className="basis-full">
                <input
                  className="outline-none focus:bg-c2 w-full rounded-lg p-1"
                  placeholder="5"
                  name="ratingMax"
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
                  placeholder="80"
                  name="scoreMin"
                />
              </div>
              <p className="flex items-center">to</p>
              <div className="basis-full">
                <input
                  className="outline-none focus:bg-c2 w-full rounded-lg p-1"
                  placeholder="100"
                  name="scoreMax"
                />
              </div>
            </div>
          </label>
        </div>

        <label className="flex gap-4">
          <div className="basis-1/2">
            <p className="font-semibold">Days</p>
            <p className="pl-4">
              <input type="checkbox" name="monday" /> Monday
            </p>
            <p className="pl-4">
              <input type="checkbox" name="tuesday" /> Tuesday
            </p>
            <p className="pl-4">
              <input type="checkbox" name="wednesday" /> Wednesday
            </p>
            <p className="pl-4">
              <input type="checkbox" name="thursday" /> Thursday
            </p>
            <p className="pl-4">
              <input type="checkbox" name="friday" /> Friday
            </p>
          </div>

          <div className="basis-1/2">
            <p className="font-semibold">Special</p>
            <p className="pl-4">
              <input type="checkbox" name="honours" /> Honours
            </p>

            <p className="pl-4">
              <input type="checkbox" name="blended" /> Blended
            </p>
          </div>
        </label>

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
