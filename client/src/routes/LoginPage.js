import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Meteor from 'react-web-meteor';

class LoginPage extends Component {

  signIn = () => {
    let {history} = this.props;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if (username.trim().length===0){
      alert('Require username.');
    }
    else if (password.trim().length===0) {
      alert('Require password.');
    }
    else {
      Meteor.loginWithPassword(
        username, password, err=>{
          if (err) alert(err.reason);
          else history.push('/');
        }
      );
    }
  };

  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>sign-in</h1>
            <input
              ref="username"
              onKeyPress={this.handleKeyPress}
              className="new-todo"
              placeholder="username"/>
            <input
              ref="password"
              type="password"
              onKeyPress={this.handleKeyPress}
              className="new-todo"
              placeholder="password"/>
          </header>
          <footer className="footer">
            <ul className="filters">
              <li onClick={this.signIn}>
                <a style={{cursor:'pointer'}}>Submit</a>
              </li>
            </ul>
            <button className="clear-completed">
              <Link to="/register">sign up</Link>
            </button>
          </footer>
        </section>
      </div>
    );
  }

}

export default LoginPage;
