import { combineReducers } from "redux";
import demoReducer from "../app/pageOne/pageOneDux";

export default combineReducers({
  demo: demoReducer
});
