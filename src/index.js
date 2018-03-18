import "./assets/styles/styles.css";
import React from "react";
import { render } from "react-dom";
import { bake } from "./app/shake";
import App from "./app/component";

const root = document.getElementById("render-app");
bake();

render(<App />, root);
