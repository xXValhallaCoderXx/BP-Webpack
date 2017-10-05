import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import './assets/styles/main.css';

import App from './components/App';
import configureStore from './store';

const root = document.getElementById('render-app');
const store = configureStore();

render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>, root);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(
            <AppContainer>
                <Provider store={store}>
                    <App />
                </Provider>
            </AppContainer>, root);
    });
}