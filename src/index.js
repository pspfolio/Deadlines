import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route  } from 'react-router';
import App from './App';
import Landingpage from './containers/Landingpage';
import Dashboard from './containers/Dashboard';
import SignIn from './containers/SignIn';
import Deadline from './containers/Deadline';
import AddDeadline from './containers/AddDeadline';
import Deadlines from './containers/Deadlines';
import { isAuthenticated } from './utils/AuthService';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

function requireAuth(nextState, replace) {
  if(!isAuthenticated()) {
    replace({ pathname: '/login' })
  }
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
(
  <MuiThemeProvider>
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
  </MuiThemeProvider>
  ),
document.getElementById('root')
);
