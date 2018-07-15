import { combineReducers } from "redux";
import demoReducer from "../app/demoDux";

export default combineReducers({
  demo: demoReducer
});
