import React from 'react'
import { render } from 'react-dom'
import App from './app';

const root = document.getElementById("render-app");
render(<App name="Valhalla Coder" />, root);