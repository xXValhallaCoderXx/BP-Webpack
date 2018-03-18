import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { logger } from 'redux-logger'


export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(logger),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers").default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
