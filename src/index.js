import "./main.css";
import "react";
import "react-dom";
import { bake } from "./treeShake";

import component from "./component";

bake();
document.body.appendChild(component());


// Webpack has 3 "modes" - development, production and none