import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./assets/styles/main.css";

import App from "./app";
import configureStore from "./store";

const root = document.getElementById("render-app");
const store = configureStore();

// Currently a small warning pops up on HMR - It will be fixed shortly via the hot-reload maintainers - warning doesnt break anything

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
