import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <section className="w-[100dvw] h-[100dvh] flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p>Something went wrong</p>
      <p className="font-light">{error.statusText || error.message}</p>
    </section>
  );
}
