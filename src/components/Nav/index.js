import React, { Component } from 'react';
import { isAuthenticated, logout } from '../../utils/AuthService.js';
import NavProfile from '../NavProfile';
import './nav.css';


export default class dlNav extends Component {
  render() {
    return(
      <nav className='app-header'>
        <div className='flex-container'>
          <h1>Deadlines.io</h1>
          { isAuthenticated() ? 
            <div>
              <NavProfile />
              <p onClick={ logout }>LogOut</p>
            </div>
            : null }
        </div>
      </nav>
    )
  }
}
