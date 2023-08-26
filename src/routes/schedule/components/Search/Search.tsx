import { Suspense, useState, lazy, useDeferredValue, Dispatch } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { Class } from "../../../../types";
import ClassesLoader from "./ClassesLoader";

const Classes = lazy(() => import("./Classes"));

type Props = {
  classes: Class[];
  setLoading: Dispatch<React.SetStateAction<boolean>>;
};
export default function Search({ classes, setLoading }: Props) {
  const [input, setInput] = useState<string>("");
  const deferredInput = useDeferredValue(input);

  const [searchInfo, setSearchInfo] = useState(false);

  return (
    <section className="md:col-span-5 md:row-span-5 bg-c1 rounded-lg box-border flex flex-col max-md:order-3">
      <label className="relative md:mx-4 mx-2 md:mt-4 mt-2">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          onMouseOver={() => setSearchInfo(true)}
          onMouseOut={() => setSearchInfo(false)}
        />
        {searchInfo && (
          <div className="absolute z-20 top-0 right-0 md:translate-x-full -translate-x-10 bg-[white] p-2 rounded-lg md:max-w-xs w-[70dvw]">
            <p>You can search any keyword for the class you are looking for.</p>
            <br />
            <p>
              Separate your keywords with commas. E.g. "Biology, 101" will
              search for all biology 101-NYA-05 and biology 101-DCN-05 classes.
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
                <span className="font-bold">Linear Al, WF</span> (Linear Algebra
                I/II/III that has classes on Wednesday and Friday. DAYS must be
                in ALL CAPS)
              </li>
              <li className="list-disc">
                <span className="font-bold">honours</span> (honours classes.
                Special keywords include "honours" and "blended")
              </li>
              <li className="list-disc">
                <span className="font-bold">p=Steven Randall, blended</span>{" "}
                (blended classes by teacher who has "Steven Randall" in their
                name. Must have "p=" before)
              </li>
              <li className="list-disc">
                <span className="font-bold">ENGLISH, haunted house</span> (all
                English class that has "haunted house" in their name. COURSE
                NAME must be in ALL CAPS)
              </li>
            </ul>
          </div>
        )}
        <input
          className="bg-c2 w-full p-1 md:text-lg rounded-lg outline-none shrink-0 focus:bg-c4 transition md:shadow-lg shadow-md"
          placeholder="COURSE, code, professor, rating, ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <div
        className="w-full h-full box-border rounded-lg overflow-y-auto md:p-4 p-2"
      // style={{
      //   scrollbarGutter: "stable",
      // }}
      >
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
    </section>
  );
}
