import React, { Component } from 'react';
import { isAuthenticated } from '../../utils/AuthService.js';
import NavProfile from '../NavProfile';
import './nav.css';


export default class dlNav extends Component {
  render() {
    return(
      <nav className='app-header'>
        <div className='flex-container'>
          <h1>Deadlines.io</h1>
          { isAuthenticated() ? <NavProfile /> : null }
        </div>
      </nav>
    )
  }
}
