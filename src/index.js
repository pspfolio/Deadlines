import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute  } from 'react-router';
import App from './App';
import Landingpage from './containers/Landingpage';
import Dashboard from './containers/Dashboard';
import Login from './components/LogIn';
import Deadline from './containers/Deadline';
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
    <Route path='/' component={ Landingpage } />
    <Route path='/dashboard' component={ App }>
      <IndexRoute component={ Dashboard } onEnter={ requireAuth } />
      <Route path='/login' component={ Login } />
      <Route path='/deadline/:id' component={ Deadline } onEnter={ requireAuth } />
    </Route>
  </Router>
  ),
document.getElementById('root')
);
