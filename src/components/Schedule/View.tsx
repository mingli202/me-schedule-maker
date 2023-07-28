import { animated, useSpring, useTransition } from "@react-spring/web";
import { Fragment, ReactElement, useContext, useEffect, useState } from "react";
import { ClassContext } from "./Schedule";
import { Class } from "../../types";

type ViewData = {
  code: string;
  section: string;
  time: Time;
  color: string;
};

type Time = {
  1?: string | undefined;
  2?: string | undefined;
  3?: string | undefined;
  4?: string | undefined;
  5?: string | undefined;
};

export default function View() {
  const { chosenClasses, setChosenClasses } = useContext(ClassContext);
  const [view, setView] = useState<ReactElement[]>([]);

  let viewData: ViewData[][];

  useEffect(() => {
    viewData = setViewData(chosenClasses);

    if (checkForOverlap(viewData)) {
      setChosenClasses(chosenClasses.slice(0, -1));
      alert("The chosen class overlaps with another!");
    } else {
      setView(() => {
        return viewData.map((i, index) => {
          return (
            <Fragment key={index}>
              <ClassBlocks blocksToShow={i} />
            </Fragment>
          );
        });
      });
    }
  }, [chosenClasses]);

  function checkForOverlap(viewData: ViewData[][]): boolean {
    console.log("viewData: ", viewData);

    const times: Time[] = viewData.flat().map((i) => i.time);
    const monday: string[] = times
      .filter((i) => i[1])
      .flatMap((k) => Object.values(k));
    const tuesday: string[] = times
      .filter((i) => i[2])
      .flatMap((k) => Object.values(k));
    const wednesday: string[] = times
      .filter((i) => i[3])
      .flatMap((k) => Object.values(k));
    const thursday: string[] = times
      .filter((i) => i[4])
      .flatMap((k) => Object.values(k));
    const friday: string[] = times
      .filter((i) => i[5])
      .flatMap((k) => Object.values(k));

    if (
      [monday, tuesday, wednesday, thursday, friday].some((day) => {
        if (day.length <= 1) {
          return false;
        }

        const last = day.at(-1) as string;

        if (
          day.slice(0, -1).some((t) => {
            if (Number(t[0]) > Number(last[0])) {
              return Number(last[1]) > Number(t[0]);
            }
            if (Number(t[0]) < Number(last[0])) {
              return Number(last[0]) < Number(t[1]);
            }
            if (Number(t[0]) === Number(last[0])) {
              return true;
            }
            return false;
          })
        ) {
          return true;
        }
        return false;
      })
    ) {
      return true;
    }

    return false;
  }

  function setViewData(chosenClasses: Class[]) {
    const toReturn = chosenClasses.map((classToShow, index) => {
      const col = ["M", "T", "W", "R", "F"];
      const row = [...Array(21).keys()].map((i) =>
        (i % 2 === 0 ? i * 50 + 800 : Math.floor(i / 2) * 2 * 50 + 830).toFixed(
          0
        )
      );
      const colors = [
        "hsl(150,97%,85%)",
        "hsl(230,97%,85%)",
        "hsl(110,97%,85%)",
        "hsl(270,97%,85%)",
        "hsl(70,97%,85%)",
        "hsl(310,97%,85%)",
        "hsl(30,97%,85%)",
        "hsl(350,97%,85%)",
        "hsl(190,97%,85%)",
      ];

      const lecture = structuredClone(Object.entries(classToShow.lecture));
      const lab = structuredClone(Object.entries(classToShow.lab));

      const days = lecture
        .filter((i) => !["title", "prof", "rating"].includes(i[0]))
        .concat(lab.filter((i) => !["title", "prof", "rating"].includes(i[0])));

      return days.flatMap((i) => {
        const d = i[0]
          .split("")
          .filter((q) => q !== "\x00")
          .filter((q) => {
            if (q === "S") {
              alert("There is class on Saturday as well");
              return false;
            }
            return true;
          });

        const t = i[1] as string;
        const start = t.split("-")[0].replace("\x00", "");
        const end = t.split("-")[1].replace("\x00", "");

        return d.flatMap((j) => {
          const rowStart =
            row.findIndex((r) => Number(r) === Number(start)) + 1;
          const rowEnd = row.findIndex((r) => Number(r) === Number(end)) + 1;
          const colStart =
            col.findIndex((c) => c === j.replace("\x00", "")) + 1;

          return {
            code: classToShow.code,
            section: classToShow.section,
            time: {
              [`${colStart}`]: [rowStart, rowEnd],
            },
            color: colors[index],
          };
        });
      });
    });
    return toReturn;
  }

  return (
    <div className="col-span-7 row-span-5 bg-c1 rounded-lg p-4 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))]">
      {/* Hours */}
      <div className="col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]">
        {[...Array(21).keys()].map((i) => {
          return (
            <span
              key={i}
              className="translate-y-1/2 box-border pr-4 text-xs flex items-center justify-end"
            >
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
          return (
            <span className="text-center font-semibold" key={i}>
              {i}
            </span>
          );
        })}

        <div className="grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 bg-[white] row-span-full col-span-full row-start-2 rounded-lg shadow-lg">
          {view}
        </div>
      </div>
    </div>
  );
}

type LinesProps = {
  n: number;
  lineProperty: string;
};

function Lines({ n, lineProperty }: LinesProps) {
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

function ClassBlocks({ blocksToShow }: { blocksToShow: ViewData[] }) {
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
        className={`z-10 p-2 border border-[black] outline outline-1 outline-[black] text-[black] cursor-pointer rounded-xl`}
        style={{
          gridColumnStart: t[0],
          gridRowStart: t[1][0],
          gridRowEnd: t[1][1],
          backgroundColor: i.color,
          ...style,
        }}
        key={i.code + i.section + t[0]}
        id={i.code}
        onClick={() => {
          setChosenClasses(chosenClasses.filter((c) => c.code !== i.code));
        }}
      >
        <p>{i.code}</p>
        <p>{i.section}</p>
      </animated.div>
    );
  });
}
