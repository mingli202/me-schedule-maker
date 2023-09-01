import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { signIn } from "../../../backend/api";

type Props = {
  notVerified?: boolean;
};
export default function SignIn({ notVerified }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [denied, setDenied] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const loginInfo = await signIn(email, password);

    if (loginInfo.status === "success") {
      setDenied(false);
    } else {
      setDenied(true);
    }
  }

  return (
    <form
      className="basis-full w-full box-border p-4 shrink-0 md:text-base text-sm"
      onSubmit={(e) => void handleSubmit(e)}
    >
      <p className="w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg">
        Sign in to your account
      </p>

      <label>
        Email
        <input
          name="email"
          placeholder="Email"
          className={`w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md box-border ${denied ? "border-red-500 border border-solid" : ""
            }`}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
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
            className={`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${denied ? "border-red-500 border border-solid" : ""
              }`}
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
      <p className="mt-2 text-sm text-red-500">
        {denied ? "Email or password incorrect" : null}
        {!notVerified && !denied ? "You have not verified your email" : null}
      </p>

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
