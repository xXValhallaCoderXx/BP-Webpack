import { combineReducers } from "redux";
import pageOneReducer from "../app/PageOne/__PageOneDux";

export default combineReducers({
  demo: pageOneReducer
});
