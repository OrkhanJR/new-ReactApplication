import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const rootContainer = document.querySelector("#root");

if (rootContainer === null) throw new Error("Can't file root container");

const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
