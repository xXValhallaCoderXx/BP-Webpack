import "./assets/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { bake } from "./app/shake";
import App from "./app/component";

const root = document.getElementById("render-app");
bake();

const render = Component => {
  ReactDOM.render(<App />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./app/component", () => {
    render(App);
    render(require("./app/component"));
  });
}
