import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './index.css';
import 'todomvc-app-css/index.css';
import Meteor from 'react-web-meteor';

Meteor.connect('ws://localhost:3000/websocket');

let rootEl = document.getElementById('root');

ReactDOM.render(
  <Router />,
  rootEl
);

if (module.hot) {
  module.hot.accept('./router', () => {
    const NextApp = require('./router').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}