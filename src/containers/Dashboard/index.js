import React, { Component } from 'react';
import Deadlines from '../Deadlines';
import './dashboard.css';

export default class Deadline extends Component {
  render() {
    return (
        <Deadlines headline='Active deadlines' count='5' />
    )
  }
}
