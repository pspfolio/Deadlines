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
            <li id='nav-logo'>
              <img alt="deadlines logo" src="/img/Logo.svg" />
            </li>
            <li>
              <Link activeClassName="active" to='/dashboard'>
                  Dashboard
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to='/deadlines'>
                  Deadlines
              </Link>
            </li>
            <li>
              <Link activeClassName="active" to='/deadline/add'>
                  Add
              </Link>
            </li>
            <li>
              <Link activeClassName="active" onClick={ logout }>
                  Logout
              </Link>
            </li>
          </ul>
          
            
        </div>
        : null}
      </nav>
    )
  }
}