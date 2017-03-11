import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { getToken } from '../../utils/AuthService.js';
import userPic from './user_pic.png';

export default class NavProfile extends Component {
  constructor() {
    super();

    this.state = {
      payload: jwtDecode(getToken()),
      avatar: userPic
    }
  }

  render() {
    return (
      <span>
        { this.state.payload.email } 
        <img alt='user' src={ this.state.avatar } />
      </span>
    )
  }
}
