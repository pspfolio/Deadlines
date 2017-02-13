import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
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
    this.requireAuth = this.requireAuth.bind(this);
  }

  handleLogin(username, token) {
    this.setState({
      authenticated: true,
      user: {
        name: username,
        token: token
      }
    })
  }

  requireAuth(nextState, replace) {
    if(!this.state.authenticated) {
      replace({
        pathname: '/login'
      })
    }
  }

  render() {
    return (
      <Router history={ this.props.history }>
        <Route path='/' component={App}>
          <IndexRoute component={ () => (<Dashboard username={this.state.user.name} />) } />
          <Route path='/login' component={ () => (<LogIn handleLogin={ this.handleLogin } />) } />
        </Route>
      </Router>
    )
  }
}
