import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from "./style.module.scss";
export default class Header extends Component {
  render() {
    return (
      <div className={styles.headerClass}>
        <Link to="/">Page One</Link>
        <Link to="/two">Page Two</Link>
        <Link to="/three">Page THree</Link>
      </div>
    )
  }
}
