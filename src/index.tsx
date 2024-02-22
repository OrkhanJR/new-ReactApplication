import "./index.css";
import { createRoot } from "react-dom/client";
// import App from "./App";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
} from "./routes/contact";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";

const rootContainer = document.querySelector("#root");

if (rootContainer === null) throw new Error("Can't file root container");

const root = createRoot(rootContainer);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
