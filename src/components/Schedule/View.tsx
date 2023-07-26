import { animated, useSpring } from "@react-spring/web";

export default function View() {
  return (
    <div className="col-span-7 row-span-5 bg-c1 rounded-lg p-4 box-border grid grid-cols-[1fr_repeat(5,minmax(0,2fr))] grid-rows-[repeat(21,minmax(0,1fr))]">
      {/* Hours */}
      <div className="col-span-1 row-span-full grid grid-cols-1 grid-rows-[repeat(21,minmax(0,1fr))]">
        {[...Array(21).keys()].map((i) => {
          return (
            <span
              key={i}
              className="translate-y-1/2 box-border pr-4 text-xs flex items-center justify-end"
            >
              {Math.floor(i / 2) + 8}:{i % 2 === 0 ? "00" : "30"}
            </span>
          );
        })}
      </div>

      <div className="col-span-5 row-span-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))] border-collapse relative">
        {/* Horizontal lines */}
        <div className="absolute w-full h-full grid grid-rows-[repeat(21,minmax(0,1fr))]">
          {[...Array(20).keys()].map((i) => {
            return (
              <div key={`horizontal-${i}`}>
                <Lines n={i} property="width" />
              </div>
            );
          })}
        </div>

        {/* vertical lines */}
        <div className="absolute w-full h-full grid grid-cols-5 grid-rows-[repeat(21,minmax(0,1fr))]">
          <div className="row-span-1 col-span-full"/>
          {[...Array(4).keys()].map((i) => {
            return (
              <div key={`vertical-${i}`} className="row-[span_20/span_20]">
                <Lines n={i} property="height" />
              </div>
            );
          })}
        </div>

        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((i) => {
          return <span className="text-center font-semibold" key={i}>{i}</span>;
        })}

        {/* TODO: Actual schedule */}
        <div className="bg-c8 row-start-5 row-end-[8] z-10">Some things</div>
      </div>
    </div>
  );
}

type LinesProps = {
  n: number;
  property: string;
};
function Lines({ n, property }: LinesProps) {
  const springs = useSpring({
    from: {
      [property]: "0%",
    },
    to: {
      [property]: "100%",
    },
    delay: property === "height" ? n * 100 : n * 30,
  });

  const border = property === "height" ? "border-r w-full" : "border-b h-full";

  return <animated.div className={`${border} border-c9 box-border`} style={springs} />;
}
