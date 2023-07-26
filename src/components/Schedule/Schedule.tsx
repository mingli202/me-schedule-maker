import Search from "./Search";
import View from "./View";
import ChosenCourses from "./ChosenCourses";
import { Dispatch, Suspense, useEffect, useState } from "react";
import { Class } from "../../types";
import ClassesLoader from "./ClassesLoader";

export default function Schedule() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [professors, setProfessors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

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
    getData<Class[]>("/data/all.json", setClasses);
    getData<string[]>("/data/professors.json", setProfessors);
  }, []);

  return (
    <section className="w-full h-full bg-c9 grid grid-cols-12 grid-rows-6 box-border gap-4 p-4 text-c9">
      <Suspense fallback={<ClassesLoader />}>
        <Search classes={classes} professors={professors} setLoading={setLoading}/>
        {loading && (
          <>
            <View />
            <ChosenCourses />
          </>
        )}
      </Suspense>
    </section>
  );
}
