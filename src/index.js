import "./styles/index.scss";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./config/store";
import App from "./routes";

import { bake } from "./app/shake";

const root = document.getElementById("render-app");
const store = configureStore();
bake(); // Using only 1 Function from file to display tree shaking

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
