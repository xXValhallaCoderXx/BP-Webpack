import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./assets/styles/main.css";

import App from "./__config__/routes";
import configureStore from "./__config__/store";

const root = document.getElementById("render-app");
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
