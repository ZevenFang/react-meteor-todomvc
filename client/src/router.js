import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import IndexPage from './routes/IndexPage';
// import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';

export default function() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route path="/register" component={RegisterPage} />
        {/*<Route path="/login" component={LoginPage} />*/}
      </div>
    </Router>
  );
};
