import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import { useRef, useState } from "react";
import { EmailAuthProvider } from "firebase/auth/cordova";
import { deleteUserData } from "../../../backend/api";

type Props = {
  user?: User;
};
export default function Delete({ user }: Props) {
  const [modal, showModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [denied, setDenied] = useState(false);

  const ref = useRef<HTMLFormElement>(null);

  function handleClick() {
    if (ref.current) ref.current.reset();
    showModal(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) return;

    const credientials = EmailAuthProvider.credential(email, password);
    const res = await reauthenticateWithCredential(user, credientials).catch(
      () => {
        setDenied(true);
      }
    );

    if (!res) return;

    await deleteUserData(user.uid);

    await deleteUser(user).catch(() => {
      setDenied(true);
    });
  }

  return (
    <>
      <div className="rounded-xl border border-c9 border-solid p-4 transition hover:bg-red-800 hover:text-red-200 group">
        <h2 className="font-semibold text-xl">Delete Account</h2>
        <p>This action can't be undone</p>

        <div className="mt-4 flex items-center">
          <button
            onClick={() => void handleClick()}
            className="hover:font-bold group-hover:text-red-400"
          >
            Delete Account
          </button>
        </div>
      </div>

      {modal && (
        <div className="w-full z-20 h-full absolute bg-red-800 text-red-200 top-0 left-0 flex flex-col items-center justify-center">
          <form
            className="w-full box-border p-4 shrink-0 md:text-base text-sm"
            onSubmit={(e) => void handleSubmit(e)}
            ref={ref}
          >
            <h1 className="text-3xl mb-4 w-full text-center">
              <span className="font-bold">Warning: </span>This action can't be
              undone
            </h1>
            <label>
              Enter your email
              <input
                name="email"
                placeholder="Email"
                className={`w-full p-2 md:text-lg text-base mt-2 mb-6 outline-none rounded-md box-border text-black`}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
            </label>

            <label className="relative">
              Enter your password
              <div className="relative mt-2 flex items-center">
                <input
                  name="password"
                  placeholder="Password"
                  className={`w-full p-2 md:text-lg text-base outline-none rounded-md box-border text-black`}
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

            {denied && <p className="mt-1">Email or password incorrect</p>}

            <div className="flex justify-between gap-2">
              <button
                className="mt-6 basis-full p-2 text-center bg-red-900 rounded-lg hover:bg-red-100 hover:text-black active:bg-red-400 transition"
                type="reset"
                onClick={() => showModal(false)}
              >
                Cancel
              </button>
              <button
                className="mt-6 basis-full p-2 text-center bg-red-900 rounded-lg hover:bg-red-100 hover:text-black active:bg-red-400 transition"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
