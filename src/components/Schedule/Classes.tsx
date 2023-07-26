import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Class, Rating } from "../../types";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, useState } from "react";

type ClassesProps = {
  input: string;
  classes: Class[];
  professors: string[];
  setLoading: Dispatch<React.SetStateAction<boolean>>;
};

export default function Classes({ input, classes, professors, setLoading }: ClassesProps) {
  let keywords: string[] = input.split(","); //* Gives an array of keywords
  keywords = keywords.map((keyword) => keyword.trim()); //* removes spaces around keyword

  console.log(keywords);

  // * keyword filter
  function condition(keyword: string, searches: Class[]) {
    console.log(keyword.slice(0, 2));

    const regexArr = [
      "[0-9]",
      "[0-9]",
      "[0-9]",
      "-",
      "[0-9A-Z]",
      "[0-9A-Z]",
      "[0-9A-Z]",
      "-",
      "[0-9A-Z]",
      "[0-9A-Z]",
    ];
    const regexStr = regexArr.slice(0, keyword.length).join("");
    const regex = new RegExp(regexStr);

    //* check if keyword is a rating
    if (
      ["r>", "r<", "r="].includes(keyword.slice(0, 2)) &&
      keyword.length > 2
    ) {
      try {
        Number(keyword.slice(2));
      } catch {
        return [];
      }
      const inputRating = Number(keyword.slice(2));

      switch (keyword[1]) {
        case "=":
          return searches.filter((i) => i.lecture.rating.avg === inputRating);
          break;

        case ">":
          return searches.filter((i) => i.lecture.rating.avg >= inputRating);
          break;

        case "<":
          return searches.filter((i) => i.lecture.rating.avg <= inputRating);
          break;
      }
    }

    // * check if keyword is a score
    else if (
      ["s>", "s<", "s="].includes(keyword.slice(0, 2)) &&
      keyword.length > 2
    ) {
      try {
        Number(keyword.slice(2));
      } catch {
        return [];
      }
      const inputRating = Number(keyword.slice(2));

      switch (keyword[1]) {
        case "=":
          return searches.filter((i) => i.lecture.rating.score === inputRating);
          break;

        case ">":
          return searches.filter((i) => i.lecture.rating.score >= inputRating);
          break;

        case "<":
          return searches.filter((i) => i.lecture.rating.score <= inputRating);
          break;
      }
    }

    // * check if it's a professor
    else if (keyword.slice(0, 2) === "p=") {
      const teacher = keyword.slice(2).toLocaleLowerCase();
      return searches.filter((i) =>
        i.lecture.prof.toLowerCase().includes(teacher)
      );
    }

    // * check if course code
    else if (regex.test(keyword)) {
      return searches.filter((i) => i.code.startsWith(keyword));
    }

    // * check if day
    else if (keyword.split("").every((i) => "MTWRF".includes(i))) {
      return searches.filter((i) => {
        const lecture = structuredClone(Object.keys(i.lecture));
        const lab = structuredClone(Object.keys(i.lab));
        const days = lecture
          .filter((i) => !["title", "prof", "rating"].includes(i))
          .concat(lab.filter((i) => !["title", "prof", "rating"].includes(i)))
          .join("");
        return days.includes(keyword);
      });
    }

    // * check if course name
    else if (keyword.toUpperCase() === keyword) {
      return searches.filter((i) => i.course.startsWith(keyword));
    }

    // TODO: search by: class name, day, special keywords

    // * check if special keyword
    else if (
      ["honours", "blended"].some((i) => i.startsWith(keyword.toLowerCase()))
    ) {
      const special = keyword.toLowerCase();

      if ("honours".startsWith(special)) {
        return searches.filter((i) => i.more.startsWith("For Honours"));
      } else if ("blended".startsWith(special)) {
        return searches.filter((i) => i.more.startsWith("BLENDED"));
      }
    }

    // * if no pattern matches, search for name
    else {
      return searches.filter((i) =>
        i.lecture.title.toLowerCase().startsWith(keyword.toLowerCase())
      );
    }

    return [];
  }

  // * filter the first keyword
  let targetClasses = condition(keywords[0], classes);

  // * from the current already filtered array, filter for every keyword
  keywords.slice(1).forEach((keyword) => {
    targetClasses = condition(keyword, targetClasses);
  });
  console.log(targetClasses);
  setLoading(true)

  return (
    <>
      {targetClasses.map((i: Class, index: number) => (
        <div
          className="bg-c2 p-2 box-border mb-3 rounded-lg shadow-lg hover:bg-c3 transition"
          key={i.code + index}
        >
          <p className="font-light">
            {i.program}: {i.course} {i.code}
          </p>
          <p className="text-xl font-bold">
            {i.section} {i.lecture.title}
          </p>
          <p className="ml-4 relative">
            {i.lecture.prof}{" "}
            <span className="font-bold">
              {i.lecture.rating.score === 0 ? "N/A" : i.lecture.rating.score}
            </span>{" "}
            {<ScoreInfo rating={i.lecture.rating} />}
          </p>
          {Object.entries(i.lecture)
            .filter((i) => !["title", "prof", "rating"].includes(i[0]))
            .map((j, index) => {
              return (
                <p className="ml-8 font-extralight" key={index}>
                  <span className="font-normal">{j[0]}</span> {j[1] as string}
                </p>
              );
            })}
          {"prof" in i.lab && (
            <>
              <p className="ml-4 relative">
                <u>Lab</u>: {i.lab.prof}{" "}
                <span className="font-bold">
                  {i.lab.rating.score === 0 ? "N/A" : i.lab.rating.score}
                </span>{" "}
                {<ScoreInfo rating={i.lab.rating} />}
              </p>
              {Object.entries(i.lab)
                .filter((i) => !["title", "prof", "rating"].includes(i[0]))
                .map((j, index) => {
                  return (
                    <p className="ml-8 font-extralight" key={index}>
                      <span className="font-normal">{j[0]}</span>{" "}
                      {j[1] as string}
                    </p>
                  );
                })}
            </>
          )}
          {i.more !== "" && (
            <>
              <p className="text-c6">{i.more}</p>
            </>
          )}
        </div>
      ))}
    </>
  );
}

function ScoreInfo({ rating }: { rating: Rating }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      {
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="cursor-pointer"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
      }
      {hover && (
        <div className="absolute top-0 left-0 mt-6 bg-[white] rounded-lg p-2 z-10 text-xs flex">
          <p className="w-full">
            The score is calculated to take into account the numbers of raters.
            A high rating with low raters will perform worse in comparison to a
            lower rating with many raters.
          </p>
          <ul className="pl-4 shrink-0">
            <li className="list-disc">Rating: {rating.avg === 0? "N/A" : `${rating.avg}/5`}</li>
            <li className="list-disc">Raters: {rating.avg === 0? "N/A" : rating.nRating}</li>
            <li className="list-disc">Take Again: {rating.avg === 0? "N/A" : `${rating.takeAgain.toFixed(1)}%`}</li>
            <li className="list-disc">Difficulty: {rating.avg === 0? "N/A" : `${rating.difficulty}/5`}</li>
          </ul>
        </div>
      )}
    </>
  );
}
