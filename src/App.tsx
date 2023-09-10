import { RouterProvider, createHashRouter } from "react-router-dom";
import { ForgotPage, EmailVerification } from "./routes/LoginPage/components";
import { Home } from "./routes/home";
import { Schedule } from "./routes/schedule";
import { LoginPage } from "./routes/LoginPage";
import ErrorPage from "./routes/ErrorPage";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { $getAuth } from "./backend/api";
import { UserContext } from "./userContext";

function App() {
  const [user, setUser] = useState<User | null>(null);

  // TODO: refactor code and put user to all components
  useEffect(() => {
    onAuthStateChanged($getAuth(), (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });

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
        <RouterProvider router={routes} />
      </UserContext.Provider>
    </section>
  );
}

export default App;
