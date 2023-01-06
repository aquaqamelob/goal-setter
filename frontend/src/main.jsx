import React from "react";
import "./assets/styles/index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import("preline");

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
