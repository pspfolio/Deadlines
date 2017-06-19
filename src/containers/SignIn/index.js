import React, { Component } from 'react';
import PreText from '../../components/PreText';
import TextFieldMUI from '../../components/TextFieldMUI';
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
      if(!result.token) {
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
      <div>
        <section className='nav-login-flex-container'>
          <h1>DEADLINES</h1>
        </section>
        <section className='login-container'>
          <PreText header='Sign In' text='Hello, nice to see you again'/>
          { this.state.signUpError ? <p className='error'>The email address and/or password you entered was invalid.</p> : null }
          <div className='login-form'>
            <form>
              <TextFieldMUI
                  labelText='Username'
                  errorMessage='username is required'
                  hintText='Jack Bauer'
                  name='username'
                  onChange={ this.handleInputChange }
                  value={ this.state.username }
                />
                <TextFieldMUI
                  labelText='Password'
                  errorMessage='password is required'
                  name='password'
                  type='password'
                  onChange={ this.handleInputChange }
                  hintText='Enter your password'
                  value={ this.state.password }
                />
            </form>
          </div>
          <button onClick={ this.handleLogIn } disabled={ buttonDisabled } className='login-btn'>Get Started</button>
        </section></div>
    )
  }
}

/*
                    <TextFieldMUI
                        onChange={this.handleInputChange}
                        name='deadline'
                        hintText="DD.MM.YYYY"
                        labelText="Deadline"
                        value={this.state.deadline}
                    />
*/