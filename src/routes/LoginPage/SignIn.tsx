import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// import { query } from "../../backend/api";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(`${username}: ${password}`);

    // query();
  }

  return (
    <form className="basis-full w-full box-border p-4" onSubmit={handleSubmit}>
      <p className="w-full text-center font-bold mt-2 mb-6 text-2xl">
        Sign in to your account
      </p>

      <label>
        Email or Username
        <input
          name="username"
          placeholder="Username"
          className="w-full p-2 text-lg mt-2 mb-6 outline-none rounded-md"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required
          value={username}
        />
      </label>

      <label className="relative">
        <div className="flex justify-between">
          <span>Password</span>
          <Link to="/forgot">
            <span className="hover:text-c4 text-c7 transition">Forgot?</span>
          </Link>
        </div>
        <div className="relative mt-2 flex items-center">
          <input
            name="password"
            placeholder="Password"
            className="w-full p-2 text-lg outline-none rounded-md"
            type={`${showPass ? "text" : "password"}`}
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
          <FontAwesomeIcon
            icon={showPass ? faEyeSlash : faEye}
            className="absolute right-2 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          />
        </div>
      </label>

      <label>
        <button
          className="mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition"
          type="submit"
        >
          Sign In
        </button>
      </label>

      <Link to="/schedule">
        <p className="mt-6 hover:text-c4 text-c7 transition">
          Make a schedule without logging in
        </p>
      </Link>
    </form>
  );
}
