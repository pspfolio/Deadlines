import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import { addDeadline } from '../../utils/DeadlineService';

export default class AddDeadline extends Component {
    constructor() {
        super();

        this.state = {
            projectValid: false
        }

        this.handleAddDeadline = this.handleAddDeadline.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleAddDeadline(obj) {
        addDeadline(obj).then((result) => {

        })
    }
    render() {
        return (
            <div className='login-form'>
                <form>
                    <TextInput
                        label='Project name'
                        errorMessage='Project name is required'
                        placeholder='Project1'
                        name='project'
                        onChange={this.handleInputChange}
                        type='text'
                        handleIsValid={this.handleIsValid}
                        required={true} />
                    <TextInput
                        label='Customer'
                        errorMessage='Customer is required'
                        name='customer'
                        type='text'
                        onChange={this.handleInputChange}
                        placeholder='Customer name'
                        required={true} />
                    <TextInput
                        label='Deadline'
                        errorMessage='Deadline is required'
                        validationErrorMessage='Not valid value'
                        name='deadline'
                        type='text'
                        onChange={this.handleInputChange}
                        placeholder='Deadline date'
                        required={true} />
                </form>
            </div>
        )
    }
}