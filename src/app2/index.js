if(process.env.NODE_ENV !== "production"){
  require("../shared/styles/index.scss");
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/Component";
// import "moment";
// import { bake } from "./app/shake"; // Example to show Tree shaking in Action

const root = document.getElementById("render-app");
// bake(); // Using only 1 Function from file to display tree shaking

const render = () => {
  ReactDOM.render(<App />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./app/Component", () => {
    render(App);
  });
}