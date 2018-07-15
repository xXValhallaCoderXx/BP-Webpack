import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter } from "./demoDux";
import Header from "../../components/Header";

import styles from "./style.module.scss";

class Application extends Component {
  state = {
    someData: "NONE"
  };
  render() {
    const { counter } = this.props.testState;
    const { someData } = this.state;
    return (
      <div>
        <Header />
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
        <p>Count: {counter}</p>
        <button onClick={this._increaseCount}>Increase</button>
      </div>
    );
  }

  _increaseCount = () => {
    this.props.increaseCounter();
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increaseCounter
    },
    dispatch
  );

const mapStateToProps = state => {
  return { testState: state.demo };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
