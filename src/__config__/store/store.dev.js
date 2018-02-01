import { createStore, compose } from "redux";
import rootReducer from "../__rootReducer";

const createStoreWithMiddleware = compose()(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../__rootReducer", () => {
      const nextReducer = require("../__rootReducer").default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
