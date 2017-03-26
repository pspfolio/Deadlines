import React, { Component } from 'react';
import ErrorMessage from '../InputErrorMessage/'
import './textinput.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    console.log("PROPS", this.props)
    this.state = {
      valid: false,
      errorVisible: false,
      errorText: 'Required field'
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
      <div className='text-input-wrapper'> 
        { this.state.errorVisible ? <ErrorMessage errorMessage={this.state.errorMessage} /> : null }
        <label className='text-input-label' htmlFor={this.props.name}>{this.props.label}</label>
        <input
          name={ this.props.name }
          placeholder={ this.props.placeholder }
          className={ this.state.errorVisible ? 'text-input input-error' : 'text-input' }
          onChange={ this.handleInputChange }
          type={ this.props.type }
          value={ this.props.value } />
      </div>
    )
  }
}
