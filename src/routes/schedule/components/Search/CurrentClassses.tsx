import { useContext, useRef, useState } from "react";

import { Class } from "../../../../types";
import { animated, useSpring } from "@react-spring/web";
import { ClassContext } from "../../classContext";

export default function CurrentClasses() {
  const { chosenClasses } = useContext(ClassContext);

  return (
    <section className="basis-2/3 flex flex-col box-border px-1 pb-1 gap-1 shrink-0 overflow-x-hidden">
      <div className="sticky top-0 left-0 z-20 bg-c1 pt-1">
        Course Count: {chosenClasses.length}
      </div>
      {chosenClasses.map((c, index) => (
        <ClassBanner targetClass={c} index={index} key={index} />
      ))}
    </section>
  );
}

type ClassBannerProps = {
  targetClass: Class;
  index: number;
};
function ClassBanner({ targetClass, index }: ClassBannerProps) {
  const { code, section } = targetClass;
  const { prof, title } = targetClass.lecture;
  const { chosenClasses, setChosenClasses } = useContext(ClassContext);
  const [isHover, setIsHover] = useState(false);
  const start = useRef(true);

  const colors = [
    "hsl(150,97%,85%)",
    "hsl(230,97%,85%)",
    "hsl(110,97%,85%)",
    "hsl(270,97%,85%)",
    "hsl(70,97%,85%)",
    "hsl(310,97%,85%)",
    "hsl(30,97%,85%)",
    "hsl(350,97%,85%)",

    "hsl(150,97%,15%)",
    "hsl(230,97%,15%)",
    "hsl(110,97%,15%)",
    "hsl(270,97%,15%)",
    "hsl(70,97%,15%)",
    "hsl(310,97%,15%)",
    "hsl(30,97%,15%)",
    "hsl(350,97%,15%)",
    "#FFF",
  ];

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
        backgroundColor: colors.at(index),
        color: index > 7 ? "white" : "black",
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
      {prof}
    </animated.div>
  );
}
