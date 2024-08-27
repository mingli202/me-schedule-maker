import { View } from "./components";
import React, { Dispatch, useContext, useEffect, useState } from "react";
import { Class, Saved } from "../../types";
import { Search } from "./components/Search";

import { $signOut, listenForChange } from "../../backend/api";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../userContext";

import { animated, useSpring } from "@react-spring/web";
import { ClassContext } from "./classContext";

type Props = {
  login?: boolean;
};
export default function Schedule({ login }: Props) {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState<"fall" | "winter">("winter");

  const [classes, setClasses] = useState<Class[]>([]);
  const [autocompleteData, setAutocompleteData] = useState({});

  const [hoveredClass, setHoveredClass] = useState<Class>();

  const [loading, setLoading] = useState(false);
  const [chosenClasses, setChosenClasses] = useState<Class[]>([]);
  const [userData, setUserData] = useState<{
    uid: string;
    schedules: Saved[];
  } | null>(null);

  const { user } = useContext(UserContext);

  async function getData<T>(
    url: string,
    set: Dispatch<React.SetStateAction<T>>,
  ) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = (await response.json()) as T;
      set(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // check if user is signed in
    if (login) {
      if (!user) {
        navigate("/");
      } else {
        listenForChange(
          user.uid,
          (snapshot) => {
            setUserData({
              uid: user.uid,
              schedules: snapshot.val() as Saved[],
            });
          },
          "schedules",
        );
      }
    }
  }, [user, login, navigate]);

  useEffect(() => {
    const name = current === "fall" ? "" : "winter-";

    fetch(
      "https://raw.githubusercontent.com/mingli202/next-schedule-maker/main/public/json/allClasses.json",
    )
      .then((res) => res.json())
      .then((r: Record<string, Class>) => setClasses(Object.values(r)))
      .catch((err) => console.log(err));

    getData<typeof autocompleteData>(
      `/me-schedule-maker/data/${name}data.json`,
      setAutocompleteData,
    ).catch((err) => console.log(err));
  }, [current]);

  async function handleOnClick() {
    await $signOut();
  }

  const [open, setOpen] = useState(true);

  return (
    <ClassContext.Provider
      value={{ chosenClasses, setChosenClasses, hoveredClass, setHoveredClass }}
    >
      <nav className="md:text-base text-xs w-full bg-c9 text-c1 shrink-0 flex justify-between items-center">
        <Link to={user ? `../users/${user.uid}` : "/"}>
          <FontAwesomeIcon
            icon={faHome}
            className="ml-2 cursor-pointer transition hover:text-c4"
          />
        </Link>
        <div className="flex gap-2">
          {current === "fall" ? "Fall 2023" : "Winter 2024"} JAC{" "}
          <span className=" max-md:hidden">Mock Schedule Maker</span>
          <DropDownMenu
            show={show}
            handleClick={() => setShow((s) => !s)}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
        <p
          onClick={() => void handleOnClick()}
          className="mr-2 cursor-pointer transition hover:text-c4"
        >
          {userData ? "Sign Out" : ""}
        </p>
      </nav>

      <section className="w-full basis-full bg-c9 md:grid md:grid-cols-12 md:grid-rows-6 box-border gap-2 px-2 pb-2 text-c9 flex flex-col md:text-base text-xs overflow-auto">
        <Search
          classes={classes}
          setLoading={setLoading}
          userData={userData}
          aucmpData={autocompleteData}
        />
        {loading && classes.length !== 0 && (
          <>
            <View />
          </>
        )}
      </section>
      {open && (
        <div className="absolute w-screen h-screen z-30 flex flex-col items-center justify-center bg-white/40 backdrop-filter backdrop-blur-lg">
          <p>
            An improved version with autobuild and export to excel is available
            at:
          </p>
          <a href="https://dream-builder-hazel.vercel.app/editor/search">
            https://dream-builder-hazel.vercel.app/editor/search
          </a>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}
    </ClassContext.Provider>
  );
}

type DropDownMenuProps = {
  show: boolean;
  handleClick: () => void;
  current: "fall" | "winter";
  setCurrent: React.Dispatch<React.SetStateAction<"fall" | "winter">>;
};
function DropDownMenu({
  show,
  handleClick,
  current,
  setCurrent,
}: DropDownMenuProps) {
  const springs = useSpring({
    rotate: show ? 180 : 0,
    y: show ? "0%" : "-200%",
  });

  return (
    <>
      <animated.div style={{ rotate: springs.rotate }}>
        <FontAwesomeIcon
          icon={faAngleDown}
          onClick={handleClick}
          className="cursor-pointer"
        />
      </animated.div>
      <animated.div
        style={{ y: springs.y }}
        className="absolute md:top-6 top-4 z-10 text-c1 bg-c9 [&>p]:p-1 [&>p]:cursor-pointer"
      >
        <p
          className={`${
            current === "fall" ? "bg-c8" : ""
          } hover:font-bold transition`}
          onClick={() => {
            setCurrent("fall");
            handleClick();
          }}
        >
          Fall 2023
        </p>

        <p
          className={`${
            current === "winter" ? "bg-c8" : ""
          } hover:font-bold transition`}
          onClick={() => {
            setCurrent("winter");
            handleClick();
          }}
        >
          Winter 2024
        </p>
      </animated.div>
    </>
  );
}
