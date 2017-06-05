import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute  } from 'react-router';
import App from './App';
import Landingpage from './containers/Landingpage';
import Dashboard from './containers/Dashboard';
import SignIn from './containers/SignIn';
import Deadline from './containers/Deadline';
import AddDeadline from './containers/AddDeadline';
import Deadlines from './containers/Deadlines';
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
    <Route path='/login' component={ SignIn } />
    <Route path='/app' component={ App }>
      <Route path='/dashboard' component={ Dashboard } onEnter={ requireAuth } />
      <Route path='/deadlines' component={ Deadlines } onEnter={ requireAuth } />
      <Route path='/deadline/add' component={ AddDeadline } onEnter={ requireAuth } />
      <Route path='/deadline/:id' component={ Deadline } onEnter={ requireAuth } />
    </Route>
  </Router>
  ),
document.getElementById('root')
);
