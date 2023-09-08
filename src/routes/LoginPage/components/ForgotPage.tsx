import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassEmail } from "../../../backend/api";

export default function ForgotPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await resetPassEmail(email);
    if (!res) {
      setSent(true);
      return;
    }

    setError(res.code.split("/")[1].split("-").join(" "));
  }

  return (
    <section className="gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center">
      <p className="font-bold text-2xl">I forgor</p>
      {!sent ? (
        <>
          <form className="flex gap-4" onSubmit={(e) => void handleSubmit(e)}>
            <input
              placeholder="email"
              className="outline-none p-2 rounded shadow-c9 shadow-lg w-80"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <input type="submit" className="hidden" />
            <button className="p-2 rounded bg-c9 transition text-c1 hover:text-c9 hover:bg-c1">
              Send
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </>
      ) : (
        <div>
          <p className="text-center">
            A reset password link has been sent to your email.
          </p>
          <p className="text-center">
            If you did not recieve and email, try again.
          </p>
        </div>
      )}
      <Link to="/" className="hover:text-c4 text-c7 transition">
        Back to sign in page.
      </Link>
    </section>
  );
}
