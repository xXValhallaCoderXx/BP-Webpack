import { ActionTypes } from "../actions";

const initialState = {
  counter: 0
};

export default function demoReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREASE:
      return {
        counter: state.counter + 1
      };
  }
  return state;
}
