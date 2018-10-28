import './styles/index.scss';
import React from 'react';
import { render } from 'react-dom';
import { bake } from './app/shake';
import App from './app/index.tsx';

const root = document.getElementById('render-app');
bake();

render(<App />, root);
