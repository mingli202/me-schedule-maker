import { Link } from "react-router-dom";
import { Navbar } from "../index.ts";

// TODO: FInish the home section
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-[100dvw] h-[100dvh] z-[-1]">
        <div>
          <Link to="/schedule">
            <button>Start</button>
          </Link>
        </div>
      </section>
    </>
  );
}
