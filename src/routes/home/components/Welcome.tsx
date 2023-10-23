import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  scroll: number;
};
export default function Welcome({ scroll }: Props) {
  const springs = useSpring({
    scale: 1 - scroll / window.innerHeight,
  });

  return (
    <animated.div
      className="basis-full box-border flex flex-col items-center justify-center gap-2"
      style={springs}
    >
      <h1 className="md:text-7xl text-4xl font-bold text-c9">Welcome!</h1>
      <p className="font-bold text-base">Ready to make your dream schedule?</p>

      <div className="flex gap-2 mt-4 md:text-base text-sm">
        <button
          onClick={() =>
            document.getElementById("schedules")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="text-c5 hover:underline"
        >
          Check current schedules
        </button>

        <Link to="schedule">
          <button className="text-c1 mr-4 hover:bg-c1 hover:text-c9 transition bg-c9 p-2 rounded">
            New <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
      </div>
    </animated.div>
  );
}
