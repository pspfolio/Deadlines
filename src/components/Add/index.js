import React, { Component } from 'react';
import AddForm from '../AddForm';
import './Add.css';

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { showForm: !prevState.showForm }
    })
  }

  render() {
    return(
      <div className='container'>
        <div className='add-button' onClick={this.handleClick}>
          +
        </div>
          { this.state.showForm ? <AddForm /> : null }
      </div>
    )
  }
}
