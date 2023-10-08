import { useEffect, useState } from "react";
import { images } from "../../../assets";
import { ImageType } from "../../../types";
import { animated, easings, useSpring } from "@react-spring/web";

export default function LoginBg() {
  const { loginBg } = images;
  const [current, setCurrent] = useState(0);
  const length = loginBg.length - 1;

  const left = [
    "M0 0L0 100 5 100 0 0z",
    "M0 0L0 100 7.5 100 2.5 0z",
    "M0 0L0 100 10 100 5 0z",
    "M0 0L0 100 12.5 100 7.5 0z",
  ];

  const right = [
    "M100 100L100 0 95 0 100 100z",
    "M100 100L100 0 92.5 0 97.5 100z",
    "M100 100L100 0 90 0 95 100z",
    "M100 100L100 0 87.5 0 92.5 100z",
  ];

  const fill = ["#FFF", "#ade8f4", "#48cae4", "#0096c7"];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c === length ? 1 : c + 1));
    }, 6000);

    return () => clearInterval(id);
  }, [length]);

  return (
    <section className="w-full h-full flex overflow-hidden relative">
      {loginBg.map((img, index) => (
        <ImagePanel
          img={img}
          key={img.name + index.toString()}
          index={index}
          current={current}
          length={length}
        />
      ))}
      {/* Left side */}
      <animated.div className="h-full absolute left-0 w-full">
        {left.map((i, index) => (
          <Left
            dInitial={i}
            index={index}
            key={index}
            fill={fill[index]}
            current={current}
          />
        ))}
      </animated.div>

      {/* Right side */}
      <animated.div className="h-full absolute right-0 w-full">
        {right.map((i, index) => (
          <Right
            dInitial={i}
            index={index}
            key={index}
            fill={fill[index]}
            current={current}
          />
        ))}
      </animated.div>
    </section>
  );
}

type ImagePanelProps = {
  img: ImageType;
  index: number;
  current: number;
  length: number;
};
function ImagePanel({ img, index, current, length }: ImagePanelProps) {
  const { url } = img;

  const [springs, api] = useSpring(
    () => ({
      x: index === 0 ? "0%" : "100%",
      config: {
        duration: 2200,
        easing: easings.easeInOutExpo,
      },
    }),
    []
  );

  useEffect(() => {
    const position = index - current;

    api.start({
      x: position === 0 ? "0%" : position < 0 ? "-100%" : "100%",
      onResolve: () => {
        if (current !== length) return;

        api.set({
          x: index === 0 ? "0" : "100%",
        });
      },
    });
  }, [current]);

  return (
    <animated.div
      className="h-full absolute w-full bg-c9 flex justify-center"
      style={{
        x: springs.x,
      }}
    >
      <img src={url} className="h-full object-cover" />
    </animated.div>
  );
}

type LeftProps = {
  dInitial: string;
  index: number;
  fill: string;
  current: number;
};
function Left({ dInitial, index, fill, current }: LeftProps) {
  const [spring, api] = useSpring(
    () => ({
      d: dInitial,
      config: {
        duration: 1000,
      },
    }),
    []
  );

  useEffect(() => {
    if (current === 0) return;
    api.start({
      d: "M0 0L0 100 0 100 0 0z",
      delay: index * 50,
      config: {
        easing: easings.easeInExpo,
      },

      onResolve: () => {
        api.start({
          from: {
            d: "M0 0L0 100 100 100 100 0z",
          },
          to: {
            d: dInitial,
          },
          delay: index * 50,
          config: {
            easing: easings.easeOutExpo,
          },
        });
      },
    });
  }, [current]);

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      className="h-full w-full absolute"
      style={{
        zIndex: 10 - index,
      }}
    >
      <animated.path d={spring.d} fill={fill} />
    </svg>
  );
}

function Right({ dInitial, index, fill, current }: LeftProps) {
  const [spring, api] = useSpring(
    () => ({
      d: dInitial,
      config: {
        duration: 1000,
      },
    }),
    []
  );

  useEffect(() => {
    if (current === 0) return;
    api.start({
      d: "M100 100L100 0 0 0 0 100z",
      delay: index * 50,
      config: {
        easing: easings.easeInExpo,
      },

      onResolve: () => {
        api.start({
          from: {
            d: "M100 100L100 0 100 0 100 100z",
          },
          to: {
            d: dInitial,
          },
          delay: index * 50,
          config: {
            easing: easings.easeOutExpo,
          },
        });
      },
    });
  }, [current]);

  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      className="h-full w-full absolute"
      style={{
        zIndex: 10 - index,
      }}
    >
      <animated.path d={spring.d} fill={fill} />
    </svg>
  );
}
