import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import './assets/styles/main.css';

import App from './components/App';

const root = document.getElementById('render-app');

render(
    <AppContainer>
        <App />
    </AppContainer>, root);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(
            <AppContainer>
                <App />
            </AppContainer>, root);
    });
}