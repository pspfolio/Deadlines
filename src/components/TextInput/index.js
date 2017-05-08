import React, { Component } from 'react';
import ErrorMessage from '../InputErrorMessage/';
import moment from 'moment';
import './textinput.css';

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
      errorVisible: false,
      errorText: 'Required field'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.callIsValid = this.callIsValid.bind(this);
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

    if(this.props.date && !moment(value, 'DD.MM.YYYY', true).isValid()) {
      valid = false;
      errorVisible = true;
      errorMessage = this.props.validationErrorMessage;
    }

    this.callIsValid(valid, this.props.name);

    this.setState({
      value,
      valid,
      errorVisible,
      errorMessage
    });
  }

  callIsValid(valid, name) {
    console.log("call is valid")
    const { handleIsValid } = this.props;

    if(handleIsValid) {
      var test = {name, valid};
      console.log(test);
      handleIsValid(test);
    }
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
