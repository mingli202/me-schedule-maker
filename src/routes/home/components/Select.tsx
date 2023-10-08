import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Saved } from "../../../types";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { updateName } from "../../../backend/api";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  viewData?: Saved[];
  uid?: string;
  currentIndex: number;
};

export default function Select({
  setIndex,
  viewData,
  uid,
  currentIndex,
}: Props) {
  return (
    <section className="flex flex-col justify-between relative md:row-span-full md:col-start-8 md:col-span-2 col-span-full rounded-lg overflow-hidden max-md:order-2 md:text-base text-xs">
      <div className="relative max-h-full rounded-lg box-border bg-c1 md:p-2 p-1 flex flex-col overflow-auto">
        {viewData
          ? viewData.map((data, index) => {
            return (
              <Title
                data={data}
                index={index}
                setIndex={setIndex}
                uid={uid}
                key={index}
                currentIndex={currentIndex}
              />
            );
          })
          : "Open the editor to make a new schedule"}
      </div>
      <Link to="schedule" className="w-full flex justify-center">
        <button className="text-c1 hover:font-bold transition">
          Open Editor
        </button>
      </Link>
    </section>
  );
}

type TitleProps = {
  data: Saved;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  uid?: string;
  currentIndex: number;
};

function Title({ data, setIndex, index, uid, currentIndex }: TitleProps) {
  const [edit, setEdit] = useState(false);
  const [oldTitle, setOldTitle] = useState("");
  const [title, setTitle] = useState(data.name ?? `Untitled ${index + 1}`);

  function handleClickEdit(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.stopPropagation();

    if (!edit) {
      setOldTitle(title);
    } else setTitle(oldTitle);

    setEdit((edit) => !edit);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEdit(false);

    if (!uid) {
      return;
    }
    await updateName(uid, title, index);
  }

  const springs = useSpring({
    backgroundColor: currentIndex === index ? "#03045e" : "#caf0f8",
    color: currentIndex !== index ? "#03045e" : "#caf0f8",
  });

  return (
    <animated.div
      key={data.id}
      onClick={() => !edit && setIndex(index)}
      className={`relative cursor-pointer w-full md:px-2 px-1 md:py-4 py-2 rounded hover:font-bold flex items-center`}
      style={springs}
    >
      <FontAwesomeIcon
        icon={faPenToSquare}
        className="md:pr-2 pr-1 hover:text-c5 transition cursor-pointer"
        onClick={handleClickEdit}
      />

      {!edit ? (
        title
      ) : (
        <form onSubmit={(e) => void handleSubmit(e)} className="w-full">
          <input
            className="outline-none rounded md:p-2 p-1 w-full text-c9"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="submit" className="hidden" />
        </form>
      )}

      {index === 0 ? null : (
        <div className="absolute mx-1 w-[calc(100%-0.5rem)] h-[2px] bg-c5 -top-[1px] left-0" />
      )}
    </animated.div>
  );
}
