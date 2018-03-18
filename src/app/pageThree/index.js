import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../actions";
import Header from "../../components/Header";

class PageThree extends Component {
  render() {
    return <div>
      <Header />
      Page Three
    </div>;
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increaseReduxCounter: increaseCounter
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    testState: state.demo
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageThree);
