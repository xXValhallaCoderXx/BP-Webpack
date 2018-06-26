//import "../../assets/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./appOne";
import { bake } from "./shake"; // Example to show Tree shaking in Action

const root = document.getElementById("render-app");
bake(); // Using only 1 Function from file to display tree shaking

const render = Component => {
  ReactDOM.render(<App />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./appOne", () => {
    render(App);
    render(require("./appOne"));
  });
}