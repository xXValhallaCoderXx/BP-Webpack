import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./__PageOneDux";
import PageOneView from "./Components/PageOneView";

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
  connect(mapStateToProps, mapDispatchToProps)(PageOneView)
);
