import { makeActionCreator, createReducer } from "../../__utils__/redux-helper";

export const types = {
  INCREASE_COUNT: "INCREASE_COUNT"
};

export const actions = {
  fetch: makeActionCreator(types.INCREASE_COUNT, "payload")
};

const initialState = {
  count: 0
};

const reducer = {
  INCREASE_COUNT: (state, action) => {
    return { ...state, count: state.count + 1 };
  }
};

export default createReducer(initialState, reducer);
