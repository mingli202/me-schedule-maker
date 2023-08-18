import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Schedule } from "./routes/schedule";
import { LoginPage, ForgotPage } from "./routes/LoginPage";

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
