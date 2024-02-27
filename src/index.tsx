// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ErrorPage from "./error-page";
// import Contact, {
//   loader as contactLoader,
// } from "./routes/contact";
// import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
// import EditContact, {
//   action as editAction,
// } from "./routes/edit";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//         loader: contactLoader,
//       },
//       {
//         path: "contacts/:contactId/edit",
//         element: <EditContact />,
//         loader: contactLoader,
//         action: editAction,
//       },
//     ],
//   },
// ]);

import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const rootContainer = document.querySelector("#root");

if (rootContainer === null) throw new Error("Can't file root container");

const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
