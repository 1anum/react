import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //react le virtual dom create garxa
root.render(
  //<react.stringmode: optional ho
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

