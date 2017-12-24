import React, { Component } from "react";
import styles from "./cssModule.css";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      someData: "NONE"
    };
  }
  render() {
    return (
      <div>
        <h3>Button Is Using A Global Style</h3>
        <button className="global-class">Global Style</button>
        <hr />


      
        <h3>Button using CSS Module</h3>
        <button className={styles.testClass}>CSS Module</button>
          <hr />
        <h3>Lazy Load Example</h3>
        <button onClick={() => this.lazyLoad()}>Lazy Load Button</button>
            <div style={{ marginTop: 10 }}>
          Dynamically Loaded: {this.state.someData}
        </div>
      </div>
    );
  }

  lazyLoad() {
    import("./LazyLoad/lazy")
      .then(lazy => {
        this.setState({ someData: lazy.default });
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default Application;
