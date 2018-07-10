if(process.env.NODE_ENV !== "production"){
  require("../shared/styles/index.scss");
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/Component";
// import "moment";


const root = document.getElementById("render-app");
const render = () => {
  ReactDOM.render(<App />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./app/Component", () => {
    render(App);
  });
}