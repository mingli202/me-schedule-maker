import { Link, useNavigate } from "react-router-dom";
import { $getAuth, $signOut, detach } from "../../backend/api";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { animated, useSpring } from "@react-spring/web";

export default function Home() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const auth = $getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else {
        detach(user.uid, "schedules");
        setUserEmail(user.email ? user.email : "User");
      }
    });
  }, []);

  return (
    <section className="relative">
      <Menu menuOpen={menuOpen} />

      <nav className="flex justify-between box-border p-1 h-20">
        <img src="/me-schedule-maker/images/jac-mock-schedule-maker-high-resolution-color-logo-2.png" />
        <div className="flex gap-4 items-center box-border pr-4">
          <p>{userEmail}</p>
          <MenuIcon
            menuOpen={menuOpen}
            handleOnClick={() => setMenuOpen((m) => !m)}
          />
        </div>
      </nav>

      <Link to="schedule" className="text-c5">
        Schedule
      </Link>
    </section>
  );
}

type MenuProps = {
  menuOpen: boolean;
};
function Menu({ menuOpen }: MenuProps) {
  const [springs, ctr] = useSpring(
    () => ({
      from: {
        x: "0%",
      },
    }),
    []
  );

  useEffect(() => {
    ctr.start({
      to: {
        x: menuOpen ? "-100%" : "0%",
      },
    });
  }, [menuOpen]);

  async function handleSignOut() {
    await $signOut();
  }

  return (
    <animated.div
      className="absolute top-20 left-full bg-c1 z-10 p-2 w-28"
      style={springs}
    >
      <p className="hover:underline cursor-pointer">Settings</p>
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
function MenuIcon({ menuOpen, handleOnClick }: MenuIconProps) {
  const width = 100;
  const height = 100;

  const bars = [
    `M1 ${height * 0.2}L${width} ${height * 0.2}`,
    `M1 ${height * 0.5}L${width * 0.75} ${height * 0.5}`,
    `M1 ${height * 0.8}L${width * 0.5} ${height * 0.8}`,
  ];
  const close = [
    `M1 1L${width} ${height}`,
    `M1 ${height}L${width} 1`,
    `M1 ${height}L${width} 1`,
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <animated.path
        d={path2.d}
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <animated.path
        d={path3.d}
        stroke="#33363F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
