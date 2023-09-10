import { Link } from "react-router-dom";

export default function EmailVerification() {
  return (
    <section className="gap-4 w-[100dvw] h-[100dvh] flex flex-col justify-center items-center">
      <p className="font-bold text-2xl">Email Verification</p>
      <p className="w-[70%] text-center">
        You have not verified your email. Please check your inbox for an email
        verification link. <br />
        If you did not receive one, consider double checking your email when
        signing up.
      </p>
      <Link to="/" className="hover:text-c4 text-c7 transition">
        Back to sign in page
      </Link>
    </section>
  );
}
