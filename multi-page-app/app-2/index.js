import "./main.css";
import React from "react";
import { render } from "react-dom";
import ReactComponent from "./ReactComponent2";

import { bake } from "./treeShake";

// import component from "./component";

// bake();
// document.body.appendChild(component());

const root = document.getElementById("render-app");

render(
  <ReactComponent />,
  root
);


// Webpack has 3 "modes" - development, production and none