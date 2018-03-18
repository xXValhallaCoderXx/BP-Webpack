import React, { Component } from 'react'
import styles from "./headerStyles.scss";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.testHeaderStyles}>
        This is a shared Component
      </div>
    )
  }
}
