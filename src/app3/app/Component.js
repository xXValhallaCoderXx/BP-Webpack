import React, { Component } from "react";
import styles from "./cssModule.scss";
class PageThree extends Component {
  render() {
    return <div>
      Page Three
      <h3>Button using CSS Module</h3>
        <button className={styles.testClass}>CSS Module</button>
      </div>;
  }
}

export default PageThree;
