import { animated, useSpring, useTransition } from "@react-spring/web";
import { useContext } from "react";
import { ClassContext } from "../classContext";
import { Class } from "../../../types";

type Props = {
  login?: boolean;
  loginData?: Class[];
};
export default function View({ login, loginData }: Props) {
  const { hoveredClass, chosenClasses } = useContext(ClassContext);

  const data = loginData ?? chosenClasses;

  return (
    <section className="rounded-lg md:col-span-7 md:row-span-6 max-md:h-[60%] col-span-full bg-c1 md:p-4 p-2 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))] max-md:order-1">
      {/* Hours */}
      <div className="col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]">
        {[...Array(21).keys()].map((i) => {
          return (
            <span
              key={i}
              className="translate-y-1/2 box-border md:pr-4 md:text-xs text-[0.5rem] flex items-center justify-end pr-2"
            >
              {/* a math function to display the 30 minutes for each even numbers */}
              {Math.floor(i / 2) + 8}:{i % 2 === 0 ? "00" : "30"}
            </span>
          );
        })}
      </div>

      <div className="col-span-5 row-span-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))] border-collapse relative">
        {/* Horizontal lines */}
        <div className="absolute w-full h-full grid grid-rows-[repeat(20,minmax(0,1fr))] row-start-2">
          {[...Array(19).keys()].map((i) => {
            return (
              <div key={`horizontal-${i}`}>
                <Lines n={i} lineProperty="width" />
              </div>
            );
          })}
        </div>

        {/* vertical lines */}
        <div className="absolute w-full h-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))]">
          <div className="row-span-1 col-span-full" />
          {[...Array(4).keys()].map((i) => {
            return (
              <div key={`vertical-${i}`} className="row-[span_20/span_20]">
                <Lines n={i} lineProperty="height" />
              </div>
            );
          })}
        </div>

        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((i) => {
          // trim the words to their fist three letters if viewport is too small
          const d = window.innerWidth >= 1100 ? i : i.slice(0, 3);

          return (
            <span
              className="text-center font-semibold md:text-base text-xs"
              key={i}
            >
              {d}
            </span>
          );
        })}

        <div className="grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 bg-[white] row-span-full col-span-full row-start-2 rounded-lg md:shadow-lg shadow-md">
          {data.map((targetClass, index) => (
            <ClassBlocks
              key={index}
              blocksToShow={targetClass}
              index={index}
              login={login}
            />
          ))}
        </div>

        {hoveredClass && (
          <div className="grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 row-span-full col-span-full row-start-2 absolute opacity-50 z-10 h-full w-full">
            <ClassBlocks blocksToShow={hoveredClass} index={-1} hover />
          </div>
        )}
      </div>
    </section>
  );
}

type LinesProps = {
  n: number;
  lineProperty: string;
};

// function to draw the lines on the grid
// has to be a component so that I can put animations in it
function Lines({ n, lineProperty }: LinesProps) {
  // animation
  const springs = useSpring({
    from: {
      [lineProperty]: "0%",
    },
    to: {
      [lineProperty]: "100%",
    },
    delay: lineProperty === "height" ? n * 100 : n * 30,
  });

  const border =
    lineProperty === "height"
      ? "border-r-2 w-full left-[1px]"
      : "border-b-2 h-full top-[1px]";

  return (
    <animated.div
      className={`${lineProperty === "height" ? "w-full py-2" : "h-full px-2"
        } box-border`}
      style={springs}
    >
      <div
        className={`${border} border-[hsl(0,0%,77%)] h-full w-full relative`}
      />
    </animated.div>
  );
}

function ClassBlocks({
  blocksToShow,
  login,
  hover,
  index,
}: {
  blocksToShow: Class;
  login?: boolean;
  hover?: boolean;
  index: number;
}) {
  // use transition to put stagger effect with trail property
  const transitions = useTransition(blocksToShow.viewData, {
    from: {
      y: -20,
      scale: 0,
    },
    enter: {
      y: 0,
      scale: 1,
    },
    leave: {
      y: -20,
      scale: 0,
    },
    trail: hover ? 0 : 50,
    config: {
      duration: hover ? 0 : undefined,
    },
  });

  const { chosenClasses, setChosenClasses } = useContext(ClassContext);

  const colors = [
    "hsl(150,97%,85%)",
    "hsl(230,97%,85%)",
    "hsl(110,97%,85%)",
    "hsl(270,97%,85%)",
    "hsl(70,97%,85%)",
    "hsl(310,97%,85%)",
    "hsl(30,97%,85%)",
    "hsl(350,97%,85%)",

    "hsl(150,97%,15%)",
    "hsl(230,97%,15%)",
    "hsl(110,97%,15%)",
    "hsl(270,97%,15%)",
    "hsl(70,97%,15%)",
    "hsl(310,97%,15%)",
    "hsl(30,97%,15%)",
    "hsl(350,97%,15%)",
    "#FFF",
  ];

  return transitions((style, i) => {
    const t = Object.entries(i).flat();

    return (
      <animated.div
        className={`md:text-[14px] md:leading-[14px] text-[8px] leading-[10px] z-10 p-1 border border-[black] outline outline-1 outline-[black] text-[black] ${login ? "" : "cursor-pointer"
          } rounded-lg overflow-hidden`}
        style={{
          gridColumnStart: t[0],
          gridRowStart: t[1][0],
          gridRowEnd: t[1][1],
          backgroundColor: colors.at(index),
          color: index > 7 ? "white" : "black",
          ...style,
        }}
        key={blocksToShow.section + blocksToShow.code + t[0]}
        onClick={() => {
          if (login) {
            return;
          }
          setChosenClasses(
            chosenClasses.filter((c) => c.code !== blocksToShow.code)
          );
        }}
      >
        <p className="line-clamp-2 font-semibold">
          {blocksToShow.lecture.title}
        </p>
        <p className="line-clamp-1 font-light mt-1">{blocksToShow.code}</p>
        <p className="font-light">{blocksToShow.section}</p>
        <p className="line-clamp-2 mt-1">{blocksToShow.lecture.prof}</p>
      </animated.div>
    );
  });
}
