import { resetPassEmail } from "../../../backend/api";

type Props = {
  email?: string;
};

export default function PasswordBox({ email }: Props) {
  async function handleClick() {
    if (!email) return;

    await resetPassEmail(email);
    alert("Check your inbox.");
  }

  return (
    <div className="rounded-xl border border-c9 border-solid p-4 transition hover:bg-green-800 hover:text-green-200 group">
      <h2 className="font-semibold text-xl">Password</h2>
      <p>The password to your account</p>

      <div className="mt-4 flex items-center">
        <button
          onClick={() => void handleClick()}
          className="hover:font-bold group-hover:text-green-400"
        >
          Send password reset link
        </button>
      </div>
    </div>
  );
}
