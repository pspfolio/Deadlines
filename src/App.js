import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='app-header'>
          <div className='flex-container'>
            <div>
            <h1 className='flex-item'>Deadlines.io</h1>
            </div>
          </div>
        </nav>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
