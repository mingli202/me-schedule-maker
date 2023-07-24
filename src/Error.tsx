/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center">
      <p className="text-6xl font-semibold">Oops, An Error Occurred</p>
      <p>
        <i className="text-2xl">
          {error.status}: {error.statusText}
        </i>
      </p>
    </div>
  );
}
