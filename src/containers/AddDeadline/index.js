import React, { Component } from 'react';
import TextInput from '../../components/TextInput';
import PreText from '../../components/PreText';
import moment from 'moment';
import { addDeadline } from '../../utils/DeadlineService';
import './adddeadline.css';

export default class AddDeadline extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
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

    handleAddDeadline(event) {
        event.preventDefault();
        const deadline = {
            name: this.state.name,
            customer: this.state.customer,
            deadline: this.state.deadline
        }

        addDeadline(deadline).then((result) => {
            console.log("DONE");
        })
    }

    validateForm() {
        const validDate = moment(this.state.deadline, 'DD.MM.YYYY', true).isValid();
        return validDate && this.state.name.length > 0 && this.state.customer.length > 0;
    }

    render() {
        return (
            <section className='flex-container-add'>
                <PreText header='Add project' text='Fill the inputs and press Add button' />
                <div className='login-form'>
                    <form onSubmit={this.handleAddDeadline}>
                        <TextInput
                            label='Project'
                            errorMessage='Project name is required'
                            name='name'
                            placeholder='Project name'
                            type='text'
                            onChange={this.handleInputChange}
                            required={true} />
                        <TextInput
                            label='Customer'
                            errorMessage='Customer is required'
                            name='customer'
                            placeholder='Customer name'
                            type='text'
                            onChange={this.handleInputChange}
                            required={true} />
                        <TextInput
                            label='Deadline (DD.MM.YYYY)'
                            errorMessage='Deadline is required'
                            name='deadline'
                            placeholder='11.02.2018'
                            type='text'
                            onChange={this.handleInputChange}
                            required={true} />

                        <button disabled={!this.validateForm()} className='login-btn'>Add project</button>
                    </form>
                </div>
            </section>
        )
    }
}