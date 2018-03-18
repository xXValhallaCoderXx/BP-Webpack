import "./assets/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import configureStore from "./appConfig/store";
import { bake } from "./shake"; // Example to show Tree shaking in Action
import App from "./appConfig/routes";

const root = document.getElementById("render-app");
const store = configureStore();
bake(); // Using only 1 Function from file to display tree shaking

const render = Component => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./appConfig/routes", () => {
    render(App);
    render(require("./appConfig/routes"));
  });
}
