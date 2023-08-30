import { Link, useNavigate } from "react-router-dom";
import { $getAuth, $signOut, detach } from "../../backend/api";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();

  const auth = $getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      } else {
        detach(user.uid, "schedules");
      }
    });
  }, []);

  async function handleSignOut() {
    await $signOut();
  }

  return (
    <>
      <p>Home page</p>
      <Link to="schedule" className="text-c5">
        Schedule
      </Link>
      <p onClick={() => void handleSignOut()} className="cursor-pointer">
        Sign Out
      </p>
    </>
  );
}
