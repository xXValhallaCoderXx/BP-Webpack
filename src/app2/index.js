if(process.env.NODE_ENV !== "production"){
  require("../shared/styles/index.scss");
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/Component";

const root = document.getElementById("render-app2");

const render = Component => {
  ReactDOM.render(<App />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./app/Component", () => {
    render(App);
  });
}