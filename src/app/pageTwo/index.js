import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../actions";
import Header from "../../components/Header";


class PageTwo extends Component {
  render() {
    return <div>
      <Header />
      Page Two
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

export default connect(mapStateToProps, mapDispatchToProps)(PageTwo);
