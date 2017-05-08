import React, { Component } from 'react';
import './errormessage.css';

export default class InputErrorMessage extends Component {
  render() {
    return (
      <div className='input-errormessage'>
        <span >{ this.props.errorMessage }</span>
      </div>
    )
  }
}
