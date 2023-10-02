import { RouterProvider, createHashRouter } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

const Home = lazy(() => import("./routes/home/Home"));
const Schedule = lazy(() => import("./routes/schedule/Schedule"));
const LoginPage = lazy(() => import("./routes/LoginPage/LoginPage"));

import { ForgotPage, EmailVerification } from "./routes/LoginPage/components";
import ErrorPage from "./routes/ErrorPage";

import { User, onAuthStateChanged } from "firebase/auth";
import { $getAuth } from "./backend/api";
import { UserContext } from "./userContext";
import Loading from "./Loading";
import { Globals } from "@react-spring/shared";

function App() {
  const [user, setUser] = useState<User | null>(null);

  Globals.assign({ frameLoop: "always" });

  useEffect(() => {
    onAuthStateChanged($getAuth(), (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const routes = createHashRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/forgot",
      element: <ForgotPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/users/:uid",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/users/:uid/settings",
          element: <Home />,
        },
      ],
    },
    {
      path: "/email-verification-confirmation",
      element: <EmailVerification />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/users/:uid/schedule",
      element: <Schedule login />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <section className="w-[100dvd] h-[100dvh] flex flex-col">
      <UserContext.Provider value={{ user, setUser }}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={routes} />
        </Suspense>
      </UserContext.Provider>
    </section>
  );
}

export default App;
