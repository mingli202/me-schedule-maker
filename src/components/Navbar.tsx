import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-opacity-0 w-full p-4">
      <Link to="/">
        <img
          src="/images/jac-mock-schedule-maker-high-resolution-logo-black-on-transparent-background.png"
          className="h-10 cursor-pointer"
        />
      </Link>
    </nav>
  );
}
