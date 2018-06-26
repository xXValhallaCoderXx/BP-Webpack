//import "../../assets/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./appTwo";

const root = document.getElementById("render-app2");

const render = Component => {
  ReactDOM.render(<App />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./appTwo", () => {
    render(App);
    render(require("./appTwo"));
  });
}