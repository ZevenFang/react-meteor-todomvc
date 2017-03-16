import React from 'react';
import {
  HashRouter,
  Route
} from 'react-router-dom'
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import Header from './components/Header';

export default function() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Route exact path="/" component={IndexPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </HashRouter>
  );
};
