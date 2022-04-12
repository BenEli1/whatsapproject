import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import 'bootstrap';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
  //document.getElementById('root')
);

//reportWebVitals();
