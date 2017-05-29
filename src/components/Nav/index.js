import React, { Component } from 'react';
import { Link } from 'react-router';
import { isAuthenticated, logout } from '../../utils/AuthService.js';
import './nav.css';


export default class dlNav extends Component {
  render() {
    return (
      <nav className='nav-header'>
        {isAuthenticated() ?
        <div className='nav-flex-container'>
          <ul className='nav-list'>
            <li>
              <Link to='/dashboard'>
                  <img alt='dashboard link icon' src='/img/dashboard.svg' />
                  Dashboard
              </Link>
            </li>
          </ul>
          
            <div className='signout' onClick={logout}>
              <img alt='dashboard link icon' src='/img/signout-icon.svg' />
              <p>Sign out</p>
            </div>
            
        </div>
        : null}
      </nav>
    )
  }
}