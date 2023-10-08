import { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../../backend/api";

type Props = {
  userEmail?: string;
  displayName?: string;
};
export default function Chat({ userEmail, displayName }: Props) {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    if (!userEmail) return;

    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        userEmail,
        displayName: displayName ?? "User",
        message: text,
      },
      emailConfig.publicKey
    );

    setSending(false);
    setText("");
    alert(
      "Sent! You should have received a carbon copy of your email. We will in touch with you ASAP"
    );
    console.log("sent");
  }

  return (
    <div className="rounded-xl border border-c9 border-solid p-4 transition hover:bg-c8 hover:text-c2 group h-full flex flex-col">
      <h2 className="font-semibold md:text-xl text-base shrink-0">
        Chat with the Dev
      </h2>
      <p className="mb-4 shrink-0">
        Unsatisfied with the app? Missing feature you want to add? Baffled by
        how good the editor looks? Bugs? Tell me what you want!
      </p>
      <form
        className="basis-full flex flex-col gap-2"
        onSubmit={(e) => void handleSubmit(e)}
      >
        <label className="h-full">
          <textarea
            className="w-full h-full resize-none outline-none text-c9 rounded-xl p-2 bg-slate-100 group-hover:bg-c1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <div className="flex justify-center">
          <button className="rounded-full bg-c9 text-c1 p-2 hover:text-c9 hover:bg-c1">
            {sending ? "Sending" : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
