import React, { Component } from 'react';
import userPic from './user_pic.png';
import './nav.css';

export default class dlNav extends Component {
  render() {
    return (
      <nav className='app-header'>
        <div className='flex-container'>
          <h1>Deadlines.io</h1>
          <img alt='user' src={userPic} />
        </div>
      </nav>
    )
  }
}
