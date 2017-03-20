import React, { Component } from 'react';
import { refreshToken } from '../../utils/AuthService';

export default class LandingPage extends Component {
  render() {
    return(
      <div>
        <h2>LandingPage</h2>
        <p onClick={ () => { refreshToken('auth/refresh') } }>click</p>
      </div>

    )
  }
}
