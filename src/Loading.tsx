import { animated, useTrail } from "@react-spring/web";

export default function Loading() {
  const trails = useTrail(6, {
    loop: true,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {trails.map((props, index) => {
          return (
            <animated.div
              className="w-5 h-5 rounded-full bg-c9 absolute"
              style={{
                ...props,
              }}
              key={index}
            >
              {index}
            </animated.div>
          );
        })}
      </div>
    </section>
  );
}
