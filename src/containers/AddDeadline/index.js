import React, { Component } from 'react';
import moment from 'moment';
import TextFieldMUI from '../../components/TextFieldMUI';
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
            <div className='add-container'>
                <h2 className='site-header'>Add project</h2>
                <section className='flex-container-add'>
                    <form onSubmit={this.handleAddDeadline}>
                        <TextFieldMUI
                            onChange={this.handleInputChange}
                            name='name'
                            hintText="Awesome project"
                            labelText="Project name"
                        />
                        <TextFieldMUI
                            onChange={this.handleInputChange}
                            name='customer'
                            hintText="Corporation XD"
                            labelText="Customer"
                        />
                        <TextFieldMUI
                            onChange={this.handleInputChange}
                            name='deadline'
                            hintText="11.02.2018"
                            labelText="Deadline (DD.MM.YYYY)"
                        />

                        <button disabled={!this.validateForm()} className='login-btn'>Add</button>
                    </form>
                </section>
            </div>
        )
    }
}