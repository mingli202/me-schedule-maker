import { useNavigate } from "react-router-dom";
import { $getAuth } from "../../backend/api";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  const auth = $getAuth();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  }, []);

  console.log(auth);

  return <p>Home page</p>;
}
