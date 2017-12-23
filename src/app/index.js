import React, { Component } from 'react';
import styles from './test.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      someData: 'NONE',
    };
  }
  render() {
    return (
      <div>
        <button className="global-class">GLOBAL</button>
        <button className={styles.testClass}>TEST</button>
        <button onClick={() => this.lazyLoad()}>LAZY LOAD</button>
        <div>THE LAZY TEXT: {this.state.someData}</div>
      </div>
    );
  }

  lazyLoad() {
    import('./LazyLoad/lazy').then((lazy) => {
      this.setState({ someData: lazy.default });
    }).catch((err) => {
      console.error(err);
    });
  }
}

export default Application;