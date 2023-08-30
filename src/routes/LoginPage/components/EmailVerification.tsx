import { Link } from "react-router-dom";

export default function EmailVerification() {
  return (
    <section className="gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center">
      <p className="font-bold text-2xl">Email Verifiation</p>
      <p className="">
        You should have received a verification email. If you did not receive
        one, consider signing up again.
      </p>
      <Link to="/" className="hover:text-c4 text-c7 transition">
        Back to sign in page
      </Link>
    </section>
  );
}
