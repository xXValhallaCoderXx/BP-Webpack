import "./styles.css";
import "react";
import "react-dom";
import { bake } from "./shake";
import component from "./component";

bake();
document.body.appendChild(component());
