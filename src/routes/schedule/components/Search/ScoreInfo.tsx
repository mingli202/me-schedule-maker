import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Rating } from "../../../../types";

export default function ScoreInfo({ rating }: { rating: Rating }) {
  const [hover, setHover] = useState(false);
  const avg = rating.avg;

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
            The score is calculated to take into account the number of raters. A
            high rating with low raters will perform worse in comparison to a
            lower rating with many raters.
          </p>
          <ul className="pl-4 shrink-0">
            <li className="list-disc">
              Rating: {avg === 0 || !avg ? "N/A" : `${rating.avg}/5`}
            </li>
            <li className="list-disc">
              Raters: {avg === 0 || !avg ? "N/A" : rating.nRating}
            </li>
            <li className="list-disc">
              Take Again:{" "}
              {avg === 0 || !avg ? "N/A" : `${rating.takeAgain.toFixed(1)}%`}
            </li>
            <li className="list-disc">
              Difficulty: {avg === 0 || !avg ? "N/A" : `${rating.difficulty}/5`}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
