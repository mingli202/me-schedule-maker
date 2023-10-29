import { useSpring, animated } from "@react-spring/web";

type BottomTrianglesProps = {
  scroll: number;
};
export default function BottomTriangles({ scroll }: BottomTrianglesProps) {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <Triangle i={i} scroll={scroll} key={i} />
      ))}
    </>
  );
}

type TriangleProps = {
  i: number;
  scroll: number;
};
function Triangle({ i, scroll }: TriangleProps) {
  const fill = ["fill-c9", "fill-c5", "fill-c1"];
  const offset = 100 - (i - 1) * 2 - (100 * scroll) / (2 * window.innerHeight);
  const path = `M0 100L100 100 100 ${offset} 50 ${offset - 15} 0 ${offset}Z`;

  const spring = useSpring({
    d: path,
    delay: i * 50,
  });

  return (
    <div
      className="absolute top-0 left-0 w-full overflow-hidden h-full"
      style={{
        zIndex: -i,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="relative block w-full h-full"
      >
        <animated.path d={spring.d} className={fill.at(i - 1)} />
      </svg>
    </div>
  );
}
