import { Saved } from "../../../types";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  viewData?: Saved[];
};

export default function Select({ setIndex, viewData }: Props) {
  return (
    <section className="row-span-full col-start-8 col-span-3 rounded-lg overflow-auto">
      <div className="relative overflow-hidden rounded-lg box-border bg-c1 p-2 flex flex-col">
        {viewData
          ? viewData.map((data, index) => {
            return (
              <div
                key={data.id}
                onClick={() => setIndex(index)}
                className={`relative cursor-pointer w-full px-2 py-4 text-c9 hover:underline `}
              >
                {data.name ?? `Untitled ${index + 1}`}
                {index === 0 ? null : (
                  <div className="absolute w-full h-[1px] bg-c5 top-[-0.5px] left-0" />
                )}
              </div>
            );
          })
          : "Click New to make a new schedule"}
      </div>
    </section>
  );
}
