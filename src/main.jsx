import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Create from "./components/Create.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/createAccount",
        element: <Create />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Fragment>
    <RouterProvider router={router} />
  </Fragment>
);
