import { View } from "./components";
import {
  Dispatch,
  Suspense,
  createContext,
  lazy,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Class, Time, ViewData } from "../../types";
// import Search from "./Search";
import { ClassesLoader } from "./components/Search";

const Search = lazy(() => import("./components/Search/Search"));

export const ClassContext = createContext<{
  chosenClasses: Class[];
  setChosenClasses: Dispatch<React.SetStateAction<Class[]>>;
}>({
  chosenClasses: [],
  setChosenClasses: () => { },
});

export default function Schedule() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);
  const [chosenClasses, setChosenClasses] = useState<Class[]>([]);

  const viewData = useMemo<ViewData[][]>(
    () => handleSetViewData(chosenClasses),
    [chosenClasses]
  );

  useEffect(() => {
    if (checkForOverlap(viewData)) {
      setChosenClasses(chosenClasses.slice(0, -1));
      alert("The chosen class overlaps with another!");
    }
  }, [viewData]);

  useEffect(() => {
    async function getData<T>(
      url: string,
      set: Dispatch<React.SetStateAction<T>>
    ) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as T;
        set(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData<Class[]>("/me-schedule-maker/data/all.json", setClasses);
  }, []);

  function handleSetViewData(chosenClasses: Class[]) {
    const col = ["M", "T", "W", "R", "F"];
    const row = [...Array(21).keys()].map((i) =>
      (i % 2 === 0 ? i * 50 + 800 : Math.floor(i / 2) * 2 * 50 + 830).toFixed(0)
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
    const toReturn = chosenClasses.map((classToShow, index) => {
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
            teacher: classToShow.lecture.prof,
            title: classToShow.lecture.title,
          };
        });
      });
    });
    return toReturn;
  }

  function checkForOverlap(viewData: ViewData[][]): boolean {
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

  return (
    <ClassContext.Provider value={{ chosenClasses, setChosenClasses }}>
      <section className="w-full h-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border gap-2 p-2 text-c9 flex flex-col md:text-base text-xs overflow-auto">
        <Suspense fallback={<ClassesLoader />}>
          <Search
            classes={classes}
            setLoading={setLoading}
            viewData={viewData}
          />
          {loading && (
            <>
              <View viewData={viewData} />
            </>
          )}
        </Suspense>
      </section>
    </ClassContext.Provider>
  );
}
