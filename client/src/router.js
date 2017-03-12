import React from 'react';
import { Router, Route } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import IndexPage from './routes/IndexPage';

const history = createHashHistory();

export default function() {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}/>
    </Router>
  );
};
