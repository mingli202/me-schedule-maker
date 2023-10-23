import {
  Dispatch,
  useRef,
  useState,
  MouseEvent,
  useContext,
  useEffect,
} from "react";
import { Class, Saved } from "../../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { animated, useSpring } from "@react-spring/web";
import { updateSaved } from "../../../../backend/api";
import { ClassContext } from "../../classContext";

type Props = {
  userData: { uid: string; schedules: Saved[] } | null;
};

export default function ChosenCourses({ userData }: Props) {
  // for local storage if they don't sign in
  const key = "jac-mock-schedule-maker";

  const [savedSchedule, setSavedSchedule] = useState<Saved[]>(() => {
    if (userData) {
      if (userData.schedules) {
        return userData.schedules;
      } else {
        return [];
      }
    } else {
      const keyItem = window.localStorage.getItem(key);

      if (keyItem) {
        return JSON.parse(keyItem) as Saved[];
      }
      return [];
    }
  });

  // keep track of the id counting so there can never be two same id
  const count = useRef(savedSchedule.length);

  const { chosenClasses } = useContext(ClassContext);

  function handleSaved() {
    // to ensure that the count does not repeat (no same id)
    do {
      count.current += 1;
    } while (savedSchedule.map((s) => s.id).includes(count.current));

    setSavedSchedule([
      ...savedSchedule,
      {
        id: count.current,
        data: chosenClasses,
      },
    ]);
  }

  useEffect(() => {
    if (userData) {
      updateSaved(userData.uid, savedSchedule).catch((err) => console.log(err));
    } else {
      window.localStorage.setItem(key, JSON.stringify(savedSchedule));
    }
  }, [savedSchedule]);

  return (
    <div className="md:basis-1/3 shrink-0 overflow-auto max-md:max-h-48">
      <section className="bg-c1 rounded-lg box-border flex w-full flex-wrap gap-2 p-2">
        <div
          className="bg-c2 hover:bg-c3 active:bg-c4 transition rounded-md flex items-center justify-center md:p-4 p-2 cursor-pointer h-20"
          onClick={() => handleSaved()}
        >
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="md:text-4xl text-xl"
          />
        </div>

        {savedSchedule.map((i) => {
          return (
            <SavedBlock
              i={i}
              savedSchedule={savedSchedule}
              setSavedSchedule={setSavedSchedule}
              key={i.id}
            />
          );
        })}
      </section>
    </div>
  );
}

function ClassBlocks({
  blocksToShow,
  index,
}: {
  blocksToShow: Class;
  index: number;
}) {
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
    "#CCC",
    "#999",
    "#FFF",
  ];

  return blocksToShow.viewData.map((i) => {
    const t = Object.entries(i).flat();

    return (
      <div
        className={`z-10 border border-[black] box-border rounded-sm`}
        style={{
          gridColumnStart: t[0],
          gridRowStart: t[1][0],
          gridRowEnd: t[1][1],
          backgroundColor: colors.at(index),
        }}
        key={blocksToShow.code + blocksToShow.section + t[0]}
      ></div>
    );
  });
}

type SavedBlockProps = {
  i: Saved;
  savedSchedule: Saved[];
  setSavedSchedule: Dispatch<React.SetStateAction<Saved[]>>;
};

function SavedBlock({ i, savedSchedule, setSavedSchedule }: SavedBlockProps) {
  const { setChosenClasses } = useContext(ClassContext);

  // clone it to make sure no changes to the original array
  const block = structuredClone(i);
  // firebase doesn't register empty arrays
  if (!block.data) block.data = [];

  // animations
  const [springs, api] = useSpring(
    () => ({
      from: {
        opacity: 0,
        y: 30,
        scale: 1,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    []
  );

  function handleRemoved(e: MouseEvent<SVGSVGElement>) {
    e.stopPropagation();

    // fade out animation
    api.start({
      from: { opacity: 1, scale: 1 },
      to: { opacity: 0, scale: 0 },
      onResolve: () => {
        setSavedSchedule(savedSchedule.filter((s) => s.id !== i.id));
      },
    });
  }

  function handleClick() {
    setChosenClasses(block.data);
  }

  return (
    <animated.div
      className="min-w-[calc(5rem*1.6)] bg-[white] rounded-md grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-5 relative hover:bg-slate-200 md:shadow-lg shadow-md cursor-pointer h-20 overflow-hidden"
      key={i.id}
      style={springs}
      onClick={handleClick}
    >
      {block.data.map((j, index) => {
        return <ClassBlocks blocksToShow={j} key={index} index={index} />;
      })}
      <FontAwesomeIcon
        icon={faTrash}
        className="absolute opacity-10 m-1 bottom-0 right-0 hover:opacity-50 cursor-pointer z-10"
        onClick={handleRemoved}
      />
    </animated.div>
  );
}
