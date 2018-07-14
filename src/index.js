import "./assets/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import configureStore from "./app/store";
import { bake } from "./app/shake"; // Example to show Tree shaking in Action
import App from "./app";

const root = document.getElementById("render-app");
const store = configureStore();
bake(); // Using only 1 Function from file to display tree shaking

const render = Component => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./app", () => {
    render(App);
  });
}
