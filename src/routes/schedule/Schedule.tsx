import { View } from "./components";
import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Class, Saved, Time, ViewData } from "../../types";
import { Search } from "./components/Search";

import { $signOut, listenForChange } from "../../backend/api";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../userContext";

export const ClassContext = createContext<{
  chosenClasses: Class[];
  setChosenClasses: Dispatch<React.SetStateAction<Class[]>>;
}>({
  chosenClasses: [],
  setChosenClasses: () => { },
});

type Props = {
  login?: boolean;
};
export default function Schedule({ login }: Props) {
  const navigate = useNavigate();

  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);
  const [chosenClasses, setChosenClasses] = useState<Class[]>([]);
  const [userData, setUserData] = useState<{
    uid: string;
    schedules: Saved[];
  } | null>(null);

  const viewData = useMemo<ViewData[][]>(
    () => handleSetViewData(chosenClasses),
    [chosenClasses]
  );

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (checkForOverlap(viewData)) {
      setChosenClasses(chosenClasses.slice(0, -1));
      alert("The chosen class overlaps with another!");
    }
  }, [viewData]);

  useEffect(() => {
    // check if user is signed in
    if (login) {
      if (!user) {
        navigate("/");
      } else {
        listenForChange(
          user.uid,
          (snapshot) => {
            setUserData({
              uid: user.uid,
              schedules: snapshot.val() as Saved[],
            });
          },
          "schedules"
        );
      }
    }

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

    getData<Class[]>("/me-schedule-maker/data/all.json", setClasses).catch(
      (err) => console.log(err)
    );
  }, [user, login]);

  function handleSetViewData(chosenClasses: Class[]) {
    const col = ["M", "T", "W", "R", "F"];
    const row = [...Array(21).keys()].map((i) =>
      // [0, 1, 2, 3, ..., 20]
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
      // to make sure the origial object doesn't change
      const lecture = structuredClone(Object.entries(classToShow.lecture));
      const lab = structuredClone(
        Object.entries(classToShow.lab ? classToShow.lab : {})
      );

      // get all the days for a class
      // removes all non-day entries
      const days = lecture
        .filter((i) => !["title", "prof", "rating"].includes(i[0]))
        .concat(lab.filter((i) => !["title", "prof", "rating"].includes(i[0])));

      // iterate through all the different times
      return days.flatMap((i) => {
        // i: [day, time] e.g. ["MW", "1230-1430"]

        // day is an array of the days for a given time. e.g. ["M", "W"]
        const day = i[0].split("").filter((q) => {
          // the schedule doesn't hsow saterday classes
          if (q === "S") {
            alert("There is class on Saturday as well");
            return false;
          }
          return true;
        });

        const time = i[1] as string;
        const start = time.split("-")[0];
        const end = time.split("-")[1];

        // for each day, add an object to viewData containing the info to display the block
        return day.flatMap((j) => {
          const rowStart =
            row.findIndex((r) => Number(r) === Number(start)) + 1;
          const rowEnd = row.findIndex((r) => Number(r) === Number(end)) + 1;
          const colStart = col.findIndex((c) => c === j) + 1;

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
    // get all the times for all the classes
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
      // for each day, check how many classes there are
      // if 0 or 1, there can not be any overlap
      // if more, check if at least on one day 2 classes overlop
      [monday, tuesday, wednesday, thursday, friday].some((day) => {
        if (day.length <= 1) {
          return false;
        }

        // when selecting a new class, it could overlap with another
        // hence we compare the last entry to the rest of the classes
        const last = day.at(-1) as string;

        if (
          // check for all classes in 1 day, t:day
          day.slice(0, -1).some((t) => {
            // if target class starts before added class, then target class must finish added target class
            if (Number(t[0]) > Number(last[0])) {
              return Number(last[1]) > Number(t[0]);
            }
            // if target class starts later added class, then added class must finish before target class
            if (Number(t[0]) < Number(last[0])) {
              return Number(last[0]) < Number(t[1]);
            }
            // if they start at the same time, it can't
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

  async function handleOnClick() {
    await $signOut();
  }

  return (
    <ClassContext.Provider value={{ chosenClasses, setChosenClasses }}>
      <nav className="md:text-base text-xs w-full bg-c9 text-c1 shrink-0 flex justify-between items-center">
        <FontAwesomeIcon
          icon={faHome}
          className="ml-2 cursor-pointer transition hover:text-c4"
          onClick={() => navigate("/")}
        />
        <p>
          Fall 2023 JAC{" "}
          <span className=" max-md:hidden">Mock Schedule Maker</span>
        </p>
        <p
          onClick={() => void handleOnClick()}
          className="mr-2 cursor-pointer transition hover:text-c4"
        >
          {userData ? "Sign Out" : ""}
        </p>
      </nav>
      <section className="w-full basis-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border gap-2 px-2 pb-2 text-c9 flex flex-col md:text-base text-xs overflow-auto">
        <Search
          classes={classes}
          setLoading={setLoading}
          viewData={viewData}
          userData={userData}
        />
        {loading && classes.length !== 0 && (
          <>
            <View viewData={viewData} />
          </>
        )}
      </section>
    </ClassContext.Provider>
  );
}
