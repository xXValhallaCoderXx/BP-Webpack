import { combineReducers } from "redux";
import pageOneReducer from "../App/PageOne/__PageOneDux";

export default combineReducers({
  demo: pageOneReducer
});
