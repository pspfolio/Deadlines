import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import moment from 'moment';
import { addDeadline } from '../../utils/DeadlineService';

export default class AddDeadline extends Component {
    constructor() {
        super();

        this.state = {
            project: '',
            customer: '',
            deadline: ''
        }

        this.handleAddDeadline = this.handleAddDeadline.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleAddDeadline(obj) {
        console.log("addddding")
        addDeadline(obj).then((result) => {

        })
    }

    validateForm() {
        const validDate = moment(this.state.deadline, 'DD.MM.YYYY', true).isValid();
        return validDate && this.state.project.length > 0 && this.state.customer.length > 0;
    }

    render() {
        return (
            <div className='login-form'>
                <form onSubmit={ this.handleAddDeadline }>
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

                        <button 
                            disabled={ !this.validateForm() } 
                            className='login-btn'>Add</button>
                </form>
            </div>
        )
    }
}