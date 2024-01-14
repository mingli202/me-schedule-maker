import { Link, useLocation, useNavigate } from "react-router-dom";
import { $signOut, createUser, db, listenForChange } from "../../backend/api";
import React, { useContext, useEffect, useRef, useState } from "react";
import { User } from "firebase/auth";
import { animated, useSpring } from "@react-spring/web";
import { View } from "../schedule/components";
import { Saved } from "../../types";
import { UserContext } from "../../userContext";
import { Settings, Bg, Welcome, Select, BottomTriangles } from "./components";
import { get, ref, set } from "firebase/database";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [displayName, setDisplayName] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState<{
    user: User;
    schedules: Saved[];
  } | null>(null);

  const [index, setIndex] = useState(0);

  const { user } = useContext(UserContext);

  const sectionRef = useRef<HTMLElement>(null!);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;

    function handleScroll() {
      setScroll(element.scrollTop);
    }

    element.addEventListener("scroll", handleScroll);

    return () => element.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setDisplayName(user.displayName ?? user.email ?? "User");

      const dbRef = ref(db, `/users/${user.uid}/lastSignedIn`);
      set(dbRef, new Date().toString() + " on Schedule Maker").catch((err) =>
        console.log(err)
      );

      get(ref(db, "/public/users/" + user.uid))
        .then(async (res) => {
          if (!res.exists()) {
            await createUser({
              email: user.email ?? "user email",
              uid: user.uid,
              name: user.displayName ?? "User",
            });
          }
        })
        .catch((err) => console.log(err));

      listenForChange(
        user.uid,
        (snapshot) => {
          setUserData({
            user: user,
            schedules: snapshot.val() as Saved[],
          });
        },
        "schedules"
      );
    }
  }, [user, navigate]);

  return (
    <section
      className="w-[100dvw] h-[100dvh] relative overflow-x-hidden flex flex-col"
      ref={sectionRef}
      style={{
        perspective: "100px",
      }}
    >
      <nav className="shrink-0 flex justify-between box-border p-1 h-20 w-full items-center bg-white">
        <Link to="" className="h-20">
          <img
            src="/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-color-logo-2.png"
            className="h-full aspect-[4/3] cursor-pointer"
          />
        </Link>
        <div className="flex gap-4 items-center box-border pr-4">
          <p>{displayName}</p>
          <MenuIcon
            menuOpen={menuOpen}
            handleOnClick={() => setMenuOpen((m) => !m)}
          />
        </div>
      </nav>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {location.pathname.includes("/settings") ? (
        <Settings user={userData?.user} setDisplayName={setDisplayName} />
      ) : (
        <>
          {/* absolute */}
          <BottomTriangles scroll={scroll} />
          <Bg />

          <Welcome scroll={scroll} />

          <div className="shrink-0 flex justify-center box-border p-6 items-center">
            <h1 className="font-bold md:text-4xl text-xl z-10 text-c1">
              My Schedules
            </h1>
          </div>

          <div
            className="bg-c9 h-full box-border p-2 w-full md:grid flex flex-col md:grid-rows-6 md:grid-cols-9 gap-2 grow-0 absolute top-[100dvh]"
            id="schedules"
          >
            <View loginData={userData?.schedules?.[index].data} login />
            <Select
              uid={userData?.user.uid}
              setIndex={setIndex}
              viewData={userData?.schedules}
              currentIndex={index}
            />
          </div>
        </>
      )}
    </section>
  );
}

type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
function Menu({ menuOpen, setMenuOpen }: MenuProps) {
  const springs = useSpring({
    x: menuOpen ? "-100%" : "0%",
  });

  const location = useLocation();

  async function handleSignOut() {
    await $signOut();
  }

  function handleClick() {
    setMenuOpen(false);
  }

  return (
    <animated.div
      className="absolute top-20 left-full bg-c1 z-10 p-2 w-28"
      style={springs}
    >
      {location.pathname.includes("settings") ? (
        <Link to="">
          <p onClick={handleClick} className="hover:underline cursor-pointer">
            Back
          </p>
        </Link>
      ) : (
        <Link to="settings">
          <p onClick={handleClick} className="hover:underline cursor-pointer">
            Settings
          </p>
        </Link>
      )}
      <p
        onClick={() => void handleSignOut()}
        className="mt-2 hover:underline cursor-pointer"
      >
        Sign Out
      </p>
    </animated.div>
  );
}

type MenuIconProps = {
  menuOpen: boolean;
  handleOnClick: () => void;
};
// svg morph thing
function MenuIcon({ menuOpen, handleOnClick }: MenuIconProps) {
  const width = 100;
  const height = 100;

  // each index correspond to the d value in <path />
  const bars = [
    `M1 ${height * 0.2}L${width} ${height * 0.2}`,
    `M1 ${height * 0.5}L${width * 0.75} ${height * 0.5}`,
    `M1 ${height * 0.8}L${width * 0.5} ${height * 0.8}`,
  ];
  const close = [
    `M1 1L${width - 1} ${height - 1}`,
    `M1 ${height - 1}L${width - 1} 1`,
    `M1 ${height - 1}L${width - 1} 1`,
  ];

  const path1 = useSpring({
    d: !menuOpen ? bars[0] : close[0],
  });

  const path2 = useSpring({
    d: !menuOpen ? bars[1] : close[1],
  });

  const path3 = useSpring({
    d: !menuOpen ? bars[2] : close[2],
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className="h-10 aspect-square"
      onClick={handleOnClick}
    >
      <animated.path
        d={path1.d}
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <animated.path
        d={path2.d}
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <animated.path
        d={path3.d}
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
