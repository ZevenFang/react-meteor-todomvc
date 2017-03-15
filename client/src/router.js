import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom'
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';

export default function() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </HashRouter>
  );
};
