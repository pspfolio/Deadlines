import React, { Component } from 'react';
import './login.css';

export default class LogIn extends Component {
  render() {
    return(
      <section className='login-container'>
        <section className='login-text'>
          <h1 className='text'>Log in to Deadlines.io</h1>
          <p className='text'>Enter your details below</p>
        </section>
        <div className='login-form'>
          <form>
            <div className='login-input'>
              <label className='login-form-label' htmlFor='username'>Username</label>
              <input
                className='login-form-input'
                id='username'
                type='text'
                placeholder='Jack Bauer' />
            </div>
            <div className='login-input'>
              <label className='login-form-label' htmlFor='password'>Password</label>
              <input
                className='login-form-input'
                id='password'
                type='password'
                placeholder='Enter your password' />
            </div>
          </form>
        </div>
        <button className='login-btn'>Login</button>
      </section>
    )
  }
}
