import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ProfilePage} from './1. import, export/ProfilePage.js';
// import {App} from './2. props/example1/App.js';
// import {Talker} from './2. props/example2/Talker.js';
// import {App} from './2. props/example3/App.js';
// import {Toggle} from './3. state/Toggle.js';
import {App} from './4. component lifecycle/App.js';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ProfilePage myProps="grappa" firstName="Kevin"/> */}
    {/* <Talker /> */}
    {/* <Toggle /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
