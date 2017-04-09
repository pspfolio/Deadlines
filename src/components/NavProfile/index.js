import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { getToken } from '../../utils/AuthService.js';

export default class NavProfile extends Component {
  constructor() {
    super();

    this.state = {
      payload: jwtDecode(getToken()),
    }
  }

  render() {
    return (
      <span>
        { this.state.payload.email } 
      </span>
    )
  }
}
