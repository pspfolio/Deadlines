import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute  } from 'react-router';
import App from './App';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Login from './components/LogIn';
import Deadline from './components/Deadline';
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
      <IndexRoute component={ LandingPage } />
      <Route path='/login' component={ Login } />
            <Route path='/dashboard' component={ Dashboard } onEnter={ requireAuth } />
      <Route path='/deadline/:id' component={ Deadline } onEnter={ requireAuth } />
    </Route>
  </Router>
  ),
 document.getElementById('root')
);
