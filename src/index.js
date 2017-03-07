import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute  } from 'react-router';
import App from './App';
import Dashboard from './components/Dashboard';
import Login from './components/LogIn';
import { isAuthenticated } from './utils/AuthService';
import './index.css';

function requireAuth(nextState, replace) {
  if(!isAuthenticated()) {
    replace({ pathname: '/login' })
  }
}

ReactDOM.render(
 (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Dashboard } />
        <Route path='/dashboard' component={ Dashboard } onEnter={ requireAuth } />
        <Route path='/login' component={ Login } />
    </Route>
  </Router>
  ),
 document.getElementById('root')
);
