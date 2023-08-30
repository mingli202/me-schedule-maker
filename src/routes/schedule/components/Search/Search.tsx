import { useState, useDeferredValue, Dispatch, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { Class, Saved, ViewData } from "../../../../types";
import ClassesLoader from "./ClassesLoader";
import ChosenCourses from "./ChosenCourses";
import { useSpring, animated } from "@react-spring/web";
import Filter from "./Filter";
import Classes from "./Classes";

type Props = {
  classes: Class[];
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  viewData: ViewData[][];
  userData: { uid: string; schedules: Saved[] } | null;
};
export default function Search({
  classes,
  setLoading,
  viewData,
  userData,
}: Props) {
  const [input, setInput] = useState<string>("");
  const deferredInput = useDeferredValue(input);
  const [current, setCurrent] = useState<"search" | "filter" | "saved">(
    "search"
  );
  const deferredCurrent = useDeferredValue(current);

  const [searchInfo, setSearchInfo] = useState(false);

  return (
    <section className="md:col-span-5 md:row-span-6 bg-c1 rounded-lg box-border flex flex-col max-md:order-2">
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
              <div className="absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-xs w-[70dvw]">
                <p>
                  You can search any keyword for the class you are looking for.
                </p>
                <br />
                <p>
                  Separate your keywords with commas. E.g. "Biology, 101" will
                  search for all biology 101-NYA-05 and biology 101-DCN-05
                  classes.
                </p>
                <br />
                Examples: <br />
                <ul className="pl-4">
                  <li className="list-disc">
                    <span className="font-bold">r{">"}4.5</span> (teachers with
                    +4.5/5 rating. Symbol can be {"<"} , {">"} or {"="} )
                  </li>
                  <li className="list-disc">
                    <span className="font-bold">s{">"}80</span> (teachers with
                    +80/100 score. Symbol can be {"<"} , {">"} or {"="} )
                  </li>
                  <li className="list-disc">
                    <span className="font-bold">Linear Al, W, F</span> (Linear
                    Algebra I/II/III that has classes on Wednesday and Friday.
                    DAYS must be in ALL CAPS)
                  </li>
                  <li className="list-disc">
                    <span className="font-bold">honours</span> (honours classes.
                    Special keywords include "honours" and "blended")
                  </li>
                  <li className="list-disc">
                    <span className="font-bold">p=Steven Randall, blended</span>{" "}
                    (blended classes by teacher who has "Steven Randall" in
                    their name. Teachers must have "p=" before)
                  </li>
                  <li className="list-disc">
                    <span className="font-bold">ENGLISH, haunted house</span>{" "}
                    (all English class that has "haunted house" in their name.
                    COURSE NAME must be in ALL CAPS)
                  </li>
                </ul>
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
            {deferredInput === input ? (
              <Classes
                input={deferredInput}
                classes={classes}
                setLoading={setLoading}
              />
            ) : (
              <ClassesLoader />
            )}
          </div>
        </>
      ) : (
        current === "search" && <ClassesLoader />
      )}
      {current === "filter" && (
        <Filter setInput={setInput} setCurrent={setCurrent} />
      )}
      {current === "saved" && (
        <ChosenCourses viewData={viewData} userData={userData} />
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
