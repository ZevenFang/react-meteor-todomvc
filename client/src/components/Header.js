import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div style={{display: 'inline-block', position: 'absolute', top: 20, right: 20}}>
        <Link to="/login" className="button button-border button-primary">Login</Link>
        <Link to="/register" className="button button-border button-default" style={{marginLeft: 20}}>Register</Link>
      </div>
    );
  }

}

export default Header;