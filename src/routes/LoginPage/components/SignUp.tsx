import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { signUp } from "../../../backend/api";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [denied, setDenied] = useState<boolean | string>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPass) {
      setDenied(true);
      return;
    }

    const loginInfo = await signUp(email, password);

    if (loginInfo.status === "success") {
      setDenied(false);
    } else {
      setDenied(loginInfo.info.code.split("/")[1].replaceAll("-", " "));
    }
  }

  return (
    <form
      className="basis-full w-full box-border p-4 shrink-0 text-sm md:text-base"
      onSubmit={(e) => void handleSubmit(e)}
    >
      <p className="w-full text-center font-bold mt-2 mb-6 md:text-2xl text-lg">
        Sign up your account
      </p>

      <label>
        Email
        <input
          name="email"
          placeholder="Email"
          className={`w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md ${
            denied ? "border-red-500 border border-solid" : ""
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
        </div>
        <div className="relative mt-2 flex items-center">
          <input
            name="password"
            placeholder="Password"
            className={`w-full p-2 md:text-lg text-base outline-none rounded-md mb-6 box-border ${
              denied ? "border-red-500 border border-solid" : ""
            }`}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
        </div>
      </label>

      <label className="relative">
        <div className="flex justify-between">
          <span>Confirm Password</span>
        </div>
        <div className="relative mt-2 flex items-center">
          <input
            name="password"
            placeholder="Password"
            className={`w-full p-2 md:text-lg text-base outline-none rounded-md box-border ${
              denied ? "border-red-500 border border-solid" : ""
            }`}
            type="text"
            onChange={(e) => setConfirmPass(e.target.value)}
            required
            value={confirmPass}
          />
        </div>
      </label>

      <p className="mt-2 text-sm text-red-500">
        {denied === true ? "The passwords don't match" : null}
        {denied && denied !== true ? denied : null}
      </p>

      <label>
        <button
          className="mt-6 w-full p-2 text-center bg-c9 text-white rounded-lg hover:bg-c7 transition"
          type="submit"
        >
          Sign Up
        </button>
      </label>

      <Link to="/schedule">
        <p className="mt-6 hover:text-c4 text-c7 transition">
          Make a schedule without signing up
        </p>
      </Link>
    </form>
  );
}
