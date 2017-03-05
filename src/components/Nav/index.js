import React, { Component } from 'react';
import userPic from './user_pic.png';
import { isLoggedIn } from '../../utils/AuthService.js';
import './nav.css';

export default class dlNav extends Component {
  render() {
    return (
      <nav className='app-header'>
        <div className='flex-container'>
          <h1>Deadlines.io</h1>
          { isLoggedIn() ? <img alt='user' src={userPic} /> : null }
        </div>
      </nav>
    )
  }
}
