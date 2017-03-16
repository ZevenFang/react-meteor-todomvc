import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Meteor, {createContainer} from 'react-web-meteor';

class Header extends Component {

  logout = () => {
    alert('You have logged out!');
    Meteor.logout();
  };

  render() {
    let {user} = this.props;
    return (
      <div style={{display: 'inline-block', position: 'absolute', top: 20, right: 20}}>
        {user?
          <div>
            <span style={{fontSize: 20, color: 'darkgray'}}>Hello, {user.username}</span>
            <a onClick={this.logout} className="button button-border button-default" style={{marginLeft: 20}}>Logout</a>
          </div>:
          <div>
            <Link to="/login" className="button button-border button-primary">Login</Link>
            <Link to="/register" className="button button-border button-default" style={{marginLeft: 20}}>Register</Link>
          </div>
        }
      </div>
    );
  }

}

export default createContainer(props=>{
  let user = Meteor.user();
  return {
    user
  }
},Header);