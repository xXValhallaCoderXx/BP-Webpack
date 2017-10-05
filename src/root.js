import React from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PageOne from './components/App';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

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

export default root;