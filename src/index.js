import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './assets/styles/main.css';

import App from './components/App';
import configureStore from './store';

const root = document.getElementById('render-app');
const store = configureStore();

render(
    <AppContainer>
        <App store={store}/>
    </AppContainer>, root);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(
            <AppContainer>
                <App store={store}/>
            </AppContainer>, root);
    });
}