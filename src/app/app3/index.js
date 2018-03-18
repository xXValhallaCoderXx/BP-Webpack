import "../../assets/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./appThree";

const root = document.getElementById("render-app3");

const render = Component => {
  ReactDOM.render(<App />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./appThree", () => {
    render(App);
    render(require("./appThree"));
  });
}