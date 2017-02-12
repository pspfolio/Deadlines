import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import './index.css';

export default class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      user: {
        name: '',
        token: ''
      }
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username, token) {
    console.log(username);
    this.setState({
      authenticated: true,
      user: {
        name: username,
        token: token
      }
    })
  }

  render() {
    return (
      <Router history={ this.props.history }>
        <Route path='/' component={ Dashboard } />
        <Route path='/login' component={ () => (<LogIn handleLogin={ this.handleLogin } />)   } />
      </Router>
    )
  }
}
