import { animated, useSpring, useTransition } from "@react-spring/web";
import { Fragment, ReactElement, useContext, useEffect, useState } from "react";
import { ClassContext } from "../Schedule";
import { ViewData } from "../../../types";

type Props = {
  viewData: ViewData[][];
  login?: boolean;
};
export default function View({ viewData, login }: Props) {
  const [view, setView] = useState<ReactElement[]>([]);

  useEffect(() => {
    setView(() => {
      return viewData.map((i, index) => {
        return (
          <Fragment key={index}>
            <ClassBlocks blocksToShow={i} login={login} />
          </Fragment>
        );
      });
    });
  }, [viewData]);

  return (
    <section className="rounded-lg md:col-span-7 md:row-span-6 max-md:min-h-[60%] col-span-full bg-c1 md:p-4 p-2 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))] max-md:order-1">
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
          {view}
        </div>
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
      className={`${
        lineProperty === "height" ? "w-full py-2" : "h-full px-2"
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
}: {
  blocksToShow: ViewData[];
  login?: boolean;
}) {
  // use transition to put stagger effect with trail property
  const transitions = useTransition(blocksToShow, {
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
    trail: 50,
  });

  const { chosenClasses, setChosenClasses } = useContext(ClassContext);

  return transitions((style, i) => {
    const t = Object.entries(i.time).flat();

    return (
      <animated.div
        className={`md:text-[14px] md:leading-[14px] text-[8px] leading-[10px] z-10 p-1 border border-[black] outline outline-1 outline-[black] text-[black] ${
          login ? "" : "cursor-pointer"
        } rounded-lg overflow-hidden`}
        style={{
          gridColumnStart: t[0],
          gridRowStart: t[1][0],
          gridRowEnd: t[1][1],
          backgroundColor: i.color,
          ...style,
        }}
        key={i.code + i.section + t[0]}
        onClick={() => {
          if (login) {
            return;
          }
          setChosenClasses(chosenClasses.filter((c) => c.code !== i.code));
        }}
      >
        <p className="line-clamp-2 font-semibold">{i.title}</p>
        <p className="line-clamp-1 font-light mt-1">{i.code}</p>
        <p className="font-light">{i.section}</p>
        <p className="line-clamp-2 mt-1">{i.teacher}</p>
      </animated.div>
    );
  });
}
