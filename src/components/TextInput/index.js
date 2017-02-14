import React, { Component } from 'react';
import ErrorMessage from '../InputErrorMessage/'
import './textinput.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
      errorVisible: false,
      errorText: 'Required field',
      value: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChange(event) {
    this.validate(event.target.value);

    this.props.onChange(event);
  }

  validate(value) {
    let valid = true;
    let errorVisible = false;
    let errorMessage = '';

    if(this.props.required && !value) {
      valid = false;
      errorVisible = true;
      errorMessage = this.props.errorMessage;
    }

    this.setState({
      value,
      valid,
      errorVisible,
      errorMessage
    });
  }

  render() {
    return(
      <div className={ this.props.name }>
        { this.state.errorVisible ? <ErrorMessage errorMessage={this.state.errorMessage} /> : null }
        <input
          name={ this.props.name }
          placeholder={ this.props.placeholder }
          className={ this.state.errorVisible ? 'login-form-input input-error' : 'login-form-input' }
          onChange={ this.handleInputChange }
          type={ this.props.type }
          value={ this.state.value } />
      </div>
    )
  }
}