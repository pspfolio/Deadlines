import React, { Component } from 'react';
import Nav from './components/Nav';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='main'>
        <div className='navigation'>
          <Nav/>
        </div>
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    );
  }
}
