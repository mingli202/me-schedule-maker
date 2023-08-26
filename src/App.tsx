import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ForgotPage, EmailVerification } from "./routes/LoginPage/components";
import { Home } from "./routes/home";
import { lazy } from "react";
import { Schedule } from "./routes/schedule";

const LoginPage = lazy(() => import("./routes/LoginPage/LoginPage"));

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/forgot",
      element: <ForgotPage />,
    },
    {
      path: "/schedule",
      element: <Schedule />,
    },
    {
      path: "/users/:uid",
      element: <Home />,
    },
    {
      path: "/email-verification-confirmation",
      element: <EmailVerification />,
    },
  ],
  { basename: "/me-schedule-maker/" }
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
