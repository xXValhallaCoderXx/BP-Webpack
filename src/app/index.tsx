import React, { Component } from "react";
import {hot} from "react-hot-loader";
const styles = require("./styles.module.scss");


interface IProps {
  name: string;
}

interface IState {
  count: number;
  someData: String;
}

class Application extends Component<IProps, IState> {
  state = {
    count: 0,
    someData: "NONE"
  };
  render() {
    // This is a global variable defined in env-keys.json
    const { someData, count } = this.state;
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Button Is Using A Global Styles</h3>
        <button className="global-class">Global Style</button>
        <hr />
        <h3>Button using CSS Module</h3>
        <button className={styles.testClass}>CSS Module</button>
        <hr />
        <h3>Lazy Load Example</h3>
        <button onClick={this._lazyLoad}>Lazy Load Button</button>
        <div style={{ marginTop: 10 }}>Dynamically Loaded: {someData}</div>
        <hr />
        <h3>Counter to Display HMR</h3>
        <p>Count: {count}</p>
        <button onClick={this._increaseCount}>Increase</button>
      </div>
    );
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  _lazyLoad = () => {
    import("./lazyLoad")
      .then(lazy => {
        this.setState({ someData: lazy.default });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default hot(module)(Application);
