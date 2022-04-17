import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouteSwitch from "./RouteSwitch";
import { UserAuthProvider } from "./hooks/useUserAuth";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <UserAuthProvider>
      <RouteSwitch />
    </UserAuthProvider>
  </React.StrictMode>
);
