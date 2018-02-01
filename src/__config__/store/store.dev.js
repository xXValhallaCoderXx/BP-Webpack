import { createStore, compose } from "redux";
import rootReducer from "../reducers";

const createStoreWithMiddleware = compose()(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers").default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
