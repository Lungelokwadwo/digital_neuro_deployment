import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// This file graps everything from the App.js file and render data and uses ReactDom to grab id in index.html
// Index.html displays the whole app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
