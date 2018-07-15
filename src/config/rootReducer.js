import { combineReducers } from "redux";
import demoReducer from "../app/page_one/demoDux";

export default combineReducers({
  demo: demoReducer
});
