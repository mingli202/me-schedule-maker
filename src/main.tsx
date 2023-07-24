import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Error from "./Error";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/Home",
          element: <Home />,
        },
      ],
    },
  ]
  // { basename: "/Home/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
