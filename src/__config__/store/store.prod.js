import { createStore } from "redux";
import rootReducer from "../__rootReducer";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
