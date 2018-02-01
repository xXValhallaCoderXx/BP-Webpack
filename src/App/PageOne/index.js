import React, { Component } from "react";
import { hot } from "react-hot-loader";
import styles from "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./__PageOneDux";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      someData: "NONE"
    };
    this._increaseCount = this._increaseCount.bind(this);
  }
  render() {
    return (
      <div>
        <h3>Button Is Using A Global Styles</h3>
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
        <hr />
        <h3>Counter to Display HMR</h3>
        <p>Count: {this.props.testState.count}</p>
        <button onClick={this._increaseCount}>Increase</button>
      </div>
    );
  }

  _increaseCount() {
    const test = {
      hello: "FHDHS",
      name: {
        data: "4353"
      }
    };
    this.props.increaseReduxCounter(test);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increaseReduxCounter: actions.fetch
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    testState: state.demo
  };
}

export default hot(module)(
  connect(mapStateToProps, mapDispatchToProps)(Application)
);
