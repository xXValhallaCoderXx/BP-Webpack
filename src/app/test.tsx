import React, { Component } from "react";
const styles = require("./cssModule.css");
import { hot } from "react-hot-loader";

class Application extends Component {
  render() {
    return <div>{this._multiply(14, "1")}</div>;
  }

  _multiply(n1: number, n2: string): string {
    return n1 + n2;
  }
}

export default hot(module)(Application);
