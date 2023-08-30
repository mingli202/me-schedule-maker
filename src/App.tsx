import { RouterProvider, createHashRouter } from "react-router-dom";
import { ForgotPage, EmailVerification } from "./routes/LoginPage/components";
import { Home } from "./routes/home";
import { Schedule } from "./routes/schedule";
import { LoginPage } from "./routes/LoginPage";

const routes = createHashRouter([
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
  {
    path: "/users/:uid/schedule",
    element: <Schedule user />,
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
