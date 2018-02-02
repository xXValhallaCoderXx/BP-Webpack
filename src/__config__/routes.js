import React from "react";
import { Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { hot } from "react-hot-loader";
import PageOne from "../App/PageOne";
import PageTwo from "../app/PageTwo";
import PageThree from "../app/PageThree";

const history = createHistory();

const root = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={PageOne} />
        <Route path="/one" component={PageTwo} />
        <Route path="/two" component={PageThree} />
      </div>
    </Router>
  );
};

export default hot(module)(root);
