import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}
