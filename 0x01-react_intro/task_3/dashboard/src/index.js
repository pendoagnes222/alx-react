import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const notifications = document.getElementById('root-notifications');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  notifications
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
