import { animated, useTransition } from "@react-spring/web";

export default function Loading() {
  const springs = useTransition([0, 1, 2, 3, 4, 5], {
    from: { scale: 0.5, opacity: 0 },
    enter: { scale: 1.5, opacity: 1 },
    config: {
      damping: 0,
      frequency: 1,
    },
    trail: 1000 / 6,
  });

  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {springs((props, index) => {
          return (
            <animated.div
              className="w-5 h-5 rounded-full bg-c9 absolute"
              style={{
                ...props,
                x: 50 * Math.cos((index * Math.PI) / 3),
                y: 50 * Math.sin((index * Math.PI) / 3),
              }}
              key={index}
            ></animated.div>
          );
        })}
      </div>
    </section>
  );
}
