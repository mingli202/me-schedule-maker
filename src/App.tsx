import { RouterProvider, createHashRouter } from "react-router-dom";
import { ForgotPage, EmailVerification } from "./routes/LoginPage/components";
import { Home } from "./routes/home";
import { Schedule } from "./routes/schedule";
import { LoginPage } from "./routes/LoginPage";
import ErrorPage from "./routes/ErrorPage";

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
  },
  {
    path: "/email-verification-confirmation",
    element: <EmailVerification />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users/:uid/schedule",
    element: <Schedule user />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <section className="w-[100dvd] h-[100dvh] flex flex-col">
      <RouterProvider router={routes} />
    </section>
  );
}

export default App;
