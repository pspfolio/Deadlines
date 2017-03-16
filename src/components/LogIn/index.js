import React, { Component } from 'react';
import TextInput from '../TextInput';
import { browserHistory } from 'react-router';
import { login, setToken } from '../../utils/AuthService.js';
import './login.css';

export default class LogIn extends Component {
  constructor(props) {
      super(props);

      this.state = {
        username: '',
        password: '',
        signUpError: false
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
  }

  handleLogIn(e) {
    e.preventDefault();
    login(this.state.username, this.state.password).then(result => {
      if(!result) {
        this.setState({signUpError: true})
      } else {
        setToken(result.token);
        browserHistory.push('/dashboard')
      }
    })
  }

  render() {
    const buttonDisabled = !this.state.username || !this.state.password;
    return(
      <section className='login-container'>
        <section className='login-text'>
          <h1 className='text'>Log in to <span className='deadlines'>Deadlines.io</span></h1>
          <p className='text'>Enter your details below</p>
        </section>
        { this.state.signUpError ? <p className='error'>The email address and/or password you entered was invalid.</p> : null }
        <div className='login-form'>
          <form>
            <div className='login-input'>
              <label className='login-form-label' htmlFor='username'>Username</label>
              <TextInput
                errorMessage='username is required'
                placeholder='Jack Bauer'
                name='username'
                onChange={ this.handleInputChange }
                type='text'
                required={ true } />
            </div>
            <div className='login-input'>
              <label className='login-form-label' htmlFor='password'>Password</label>
              <TextInput
                errorMessage='password is required'
                name='password'
                type='password'
                onChange={ this.handleInputChange }
                placeholder='Enter your password'
                required={ true } />
            </div>
          </form>
        </div>
        <button onClick={ this.handleLogIn } disabled={ buttonDisabled } className='login-btn'>Login</button>
      </section>
    )
  }
}
