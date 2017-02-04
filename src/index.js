import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router';
import Dashboard from './components/Dashboard';
import './index.css';

ReactDOM.render(
  (
    <Router history={ browserHistory }>
      <Route path='/' component={ Dashboard } />
    </Router>
  ),
  document.getElementById('root')
);
