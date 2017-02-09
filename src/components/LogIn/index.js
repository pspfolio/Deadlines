import React, { Component } from 'react';
import TextInput from '../TextInput';
import './login.css';

export default class LogIn extends Component {
  constructor(props) {
      super(props);

      this.state = {
        username: '',
        password: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

    console.log(this.state)
  }

  handleLogIn() {

  }

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
              <TextInput
                placeholder='Jack Bauer'
                name='username'
                cssClass='login-form-input'
                onChange={ this.handleInputChange }
                type='text'
                required={ true } />
            </div>
            <div className='login-input'>
              <label className='login-form-label' htmlFor='password'>Password</label>
              <TextInput
                name='password'
                cssClass='login-form-input'
                type='password'
                onChange={ this.handleInputChange }
                placeholder='Enter your password'
                required={ true } />
            </div>
          </form>
        </div>
        <button onClick={ this.handleLogIn } className='login-btn'>Login</button>
      </section>
    )
  }
}
