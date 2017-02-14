import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute  } from 'react-router';
import App from './App';
import Dashboard from './components/Dashboard';
import './index.css';


ReactDOM.render(
 (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Dashboard } />
    </Route>
  </Router>
  ),
 document.getElementById('root')
);
