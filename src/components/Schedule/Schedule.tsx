import View from "./View";
import ChosenCourses from "./ChosenCourses";
import {
  Dispatch,
  Suspense,
  createContext,
  useEffect,
  useState,
} from "react";
import { Class } from "../../types";
import ClassesLoader from "./ClassesLoader";
import Search from "./Search";

// const Search = lazy(() => import("./Search"));

export const ClassContext = createContext<{
  chosenClasses: Class[];
  setChosenClasses: Dispatch<React.SetStateAction<Class[]>>
}>({
  chosenClasses: [],
  setChosenClasses: () => {}
});

export default function Schedule() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);
  const [chosenClasses, setChosenClasses] = useState<Class[]>([])

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
        const data = await response.json();
        set(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData<Class[]>("/me-schedule-maker/data/all.json", setClasses);
  }, []);

  return (
    <ClassContext.Provider value={{ chosenClasses, setChosenClasses }}>
      <section className="w-full h-full bg-c9 grid grid-cols-12 grid-rows-6 box-border gap-4 p-4 text-c9">
        <Suspense fallback={<ClassesLoader />}>
          <Search classes={classes} setLoading={setLoading} />
          {loading && (
            <>
              <View />
              <ChosenCourses />
            </>
          )}
        </Suspense>
      </section>
    </ClassContext.Provider>
  );
}
