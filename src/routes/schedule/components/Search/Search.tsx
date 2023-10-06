import {
  useState,
  useDeferredValue,
  Dispatch,
  useEffect,
  Suspense,
  lazy,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { Class, Saved, ViewData } from "../../../../types";
import { useSpring, animated } from "@react-spring/web";
import { ClassesLoader, ChosenCourses, Filter, CurrentClasses } from ".";

const Classes = lazy(() => import("./Classes"));

type Props = {
  classes: Class[];
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  viewData: ViewData[][];
  userData: { uid: string; schedules: Saved[] } | null;
  aucmpData: object;
};
export default function Search({
  classes,
  setLoading,
  viewData,
  userData,
  aucmpData,
}: Props) {
  const [input, setInput] = useState<string>("");
  const deferredInput = useDeferredValue(input);
  const [current, setCurrent] = useState<"search" | "filter" | "saved">(
    "search"
  );
  const deferredCurrent = useDeferredValue(current);

  const [searchInfo, setSearchInfo] = useState(false);

  return (
    <section className="md:col-span-5 md:row-span-6 bg-c1 rounded-lg box-border flex flex-col max-md:order-2 overflow-hidde">
      <nav className="flex justify-between w-full p-2 box-border">
        <NavElement current={current} setCurrent={setCurrent} text="search" />
        <NavElement current={current} setCurrent={setCurrent} text="filter" />
        <NavElement current={current} setCurrent={setCurrent} text="saved" />
      </nav>

      {current === "search" && deferredCurrent === current ? (
        <>
          <label className="relative md:mx-4 mx-2 mt-2">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onMouseOver={() => setSearchInfo(true)}
              onMouseOut={() => setSearchInfo(false)}
            />
            {searchInfo && (
              <div className="absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-sm w-[70dvw]">
                <p>
                  Search by keywords, separate them by a comma. Use the filter
                  tab to make your life easier.
                </p>
                <div>
                  <span className="font-bold">Available options:</span>
                  <ul className="pl-4 [&>li]:list-disc [&>li>span]:font-bold">
                    <li>
                      <span>@</span>: only show available classes.
                    </li>
                    <li>
                      <span>r{">"}n</span>: Teachers with +n/5 rating on
                      ratemyprofessor. Symbol can be {"<"}, {">"} or = (e.g. r
                      {"="}5)
                    </li>
                    <li>
                      <span>s{">"}n</span>: Teachers with +n/100 score. Symbol
                      can be {"<"}, {">"} or =. (e.g. s=100)
                    </li>
                    <li>
                      <span>honours/blended</span>: special keywords.
                    </li>
                    <li>
                      <span>p=professor</span>: classes taught by{" "}
                      <i>professor</i> (e.g. p=patrik searches classes taught by
                      professors with patrik in their names)
                    </li>
                    <li>
                      <span>COURSE_NAME</span>: searches classes that belongs in
                      COURSE_NAME (e.g. ENGLISH searches for english classes)
                    </li>
                    <li>
                      <span>XXX-XXX-XXX</span>: course code.
                    </li>
                    <li>
                      <span>M/T/W/R/F</span>: has class on that day.
                    </li>
                    <li>
                      <span>class_name</span>: if its none of the abovementioned
                      keywords, it will treat the keyword as the class name.
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <input
              className="bg-c2 w-full p-1 md:text-lg rounded-lg outline-none shrink-0 focus:bg-c4 transition md:shadow-lg shadow-md"
              placeholder="COURSE, code, professor, rating, class name, ..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <div className="w-full h-full box-border rounded-lg overflow-y-auto md:px-4 px-2 md:mt-4 mt-2">
            <Suspense fallback={<ClassesLoader />}>
              {deferredInput === input ? (
                <Classes
                  input={deferredInput}
                  classes={classes}
                  setLoading={setLoading}
                />
              ) : (
                <ClassesLoader />
              )}
            </Suspense>
          </div>
        </>
      ) : (
        current === "search" && <ClassesLoader />
      )}
      {current === "filter" && (
        <Filter
          setInput={setInput}
          setCurrent={setCurrent}
          aucmpData={aucmpData}
        />
      )}
      {current === "saved" && (
        <div className="flex flex-col h-full overflow-hidden">
          <ChosenCourses viewData={viewData} userData={userData} />
          <CurrentClasses viewData={viewData} />
        </div>
      )}
    </section>
  );
}

type NavElementProps = {
  current: string;
  setCurrent: Dispatch<React.SetStateAction<"filter" | "search" | "saved">>;
  text: "filter" | "search" | "saved";
};
function NavElement({ current, setCurrent, text }: NavElementProps) {
  const property = {
    width: current === text ? "100%" : "0%",
  };

  const [springs, ctr] = useSpring(
    () => ({
      from: property,
    }),
    []
  );

  useEffect(() => {
    ctr.start({
      to: property,
    });
  }, [current]);

  return (
    <div
      className="w-1/3 text-center cursor-pointer box-border border-c9 border-solid relative flex justify-center"
      onClick={() => setCurrent(text)}
    >
      {text.at(0)?.toUpperCase().concat(text.slice(1))}
      <animated.p
        className="absolute h-full box-border border-solid border-b-c9 border-b-2"
        style={springs}
      />
    </div>
  );
}
