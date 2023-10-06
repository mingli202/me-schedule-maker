import { useContext, useRef, useState } from "react";
import { ClassContext } from "../../Schedule";
import { ViewData } from "../../../../types";
import { animated, useSpring } from "@react-spring/web";

type Props = {
  viewData: ViewData[][];
};

export default function CurrentClasses({ viewData }: Props) {
  const differentClasses = viewData.map((vd) => vd[0]);

  return (
    <section className="basis-2/3 flex flex-col box-border px-1 pb-1 gap-1 shrink-0 overflow-x-hidden">
      <div className="sticky top-0 left-0 z-20 bg-c1 pt-1">
        Course Count: {differentClasses.length}
      </div>
      {differentClasses.map((dc, index) => (
        <ClassBanner viewData={dc} index={index} key={index} />
      ))}
    </section>
  );
}

type ClassBannerProps = {
  viewData: ViewData;
  index: number;
};
function ClassBanner({ viewData, index }: ClassBannerProps) {
  const { color, code, title, section, teacher } = viewData;
  const { chosenClasses, setChosenClasses } = useContext(ClassContext);
  const [isHover, setIsHover] = useState(false);
  const start = useRef(true);

  const springs = useSpring({
    from: {
      x: 30,
      opacity: 0,
      y: 0,
    },
    to: {
      x: isHover ? 2 : 0,
      y: isHover ? 2 : 0,
      opacity: 1,
    },
    delay: start.current ? index * 70 : 0,
  });

  return (
    <animated.div
      style={{
        backgroundColor: color,
        ...springs,
      }}
      className="relative box-border p-1 text-sm cursor-pointer rounded-lg hover:shadow-xl hover:z-10"
      onClick={() =>
        setChosenClasses(chosenClasses.filter((c) => c.code !== code))
      }
      onPointerOver={() => {
        setIsHover(true);
        start.current = false;
      }}
      onPointerOut={() => setIsHover(false)}
    >
      <p className="font-bold">{title}</p>
      <span className="font-light">
        {code} {section}
      </span>{" "}
      {teacher}
    </animated.div>
  );
}
