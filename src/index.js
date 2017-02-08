import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import './index.css';

ReactDOM.render(
  (
    <Router history={ browserHistory }>
      <Route path='/' component={ Dashboard } />
      <Route path='/login' component={ LogIn } />
    </Router>
  ),
  document.getElementById('root')
);
