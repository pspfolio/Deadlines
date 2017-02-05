import React, { Component } from 'react';
import './AddForm.css';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      customer: '',
      date: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddClick(event) {
    event.preventDefault();
    this.props.handleAddDeadline(this.state);
    this.setState({
      name: '',
      customer: '',
      date: ''
    })
  }

  render() {
    const buttonDisabled = !this.state.name || !this.state.customer || !this.state.date;
    return(
        <div className='add-form'>
          <form>
            <label className='form-input'>
              Name
              <input
                name='name'
                type='text'
                placeholder='Project name'
                value={ this.state.name }
                onChange={ this.handleInputChange } />
            </label>
            <label className='form-input'>
              Customer
              <input
                name='customer'
                type='text'
                placeholder='Customer name'
                value={ this.state.customer }
                onChange={ this.handleInputChange } />
            </label>
            <label className='form-input'>
            Deadline
            <input
              name='date'
              type='text'
              placeholder='date'
              value={ this.state.date }
              onChange={ this.handleInputChange } />
            </label>
            <button className='add-btn' disabled={ buttonDisabled } onClick={ this.handleAddClick }>Add</button>
          </form>
        </div>
    )
  }
}
