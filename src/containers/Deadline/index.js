import React, { Component } from 'react';
import { loadDeadline, updateDeadline } from '../../utils/DeadlineService';
import TextFieldMUI from '../../components/TextFieldMUI';
import TextData from '../../components/TextData';
import moment from 'moment';
import './deadline.css';

export default class Deadline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            customer: '',
            deadline: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateDeadline = this.updateDeadline.bind(this);
        this.closeDeadline = this.closeDeadline.bind(this);
        this.showTempMessage = this.showTempMessage.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.params;
        loadDeadline(id).then((result) => this.setState({ ...result }))
    }

    handleInputChange(event) {
        console.log(this.state);
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    updateDeadline() {
        updateDeadline(this.state).then((result) => {
            if (!result.ok) {
                this.handleErrors();
            } else {
                this.showTempMessage('Project updated');
            }
        }).catch(this.handleErrors)
    }

    closeDeadline() {
        this.setState({ 
            closed: true,
            closedTS: new Date()
        }, this.updateDeadline);
    }

    showTempMessage(message) {
        this.setState({ message })
        setTimeout(() => this.setState({ message: '' }), 2000)
    }

    handleErrors() {
        this.setState({ errorMessage: 'Something went wrong, please try again'})
    }

    get projectStatus() {
        return this.state.closed ? 'completed' : 'active';
    }

    render() {
        return (
            <div className='deadline-container'>
                <h2 className='site-header'>Project info</h2>
                <div className='flex-container-deadline flex-deadline'>
                    <TextFieldMUI
                        onChange={this.handleInputChange}
                        name='name'
                        hintText="Awesome project"
                        labelText="Project name"
                        value={this.state.name}
                    />
                    <TextFieldMUI
                        onChange={this.handleInputChange}
                        name='customer'
                        hintText="Name of Customer"
                        labelText="Customer"
                        value={this.state.customer}
                    />
                    <TextFieldMUI
                        onChange={this.handleInputChange}
                        name='deadline'
                        hintText="DD.MM.YYYY"
                        labelText="Deadline"
                        value={this.state.deadline}
                    />

                        <TextData label="Deadline from now" value={moment(this.state.deadline).fromNow()} />
                        <TextData label="Project added" value={moment(this.state.addedTS).format("DD.MM.YYYY")} />
                        <TextData label="Status" value={this.projectStatus} valueClass={this.projectStatus} />
                </div>

                <div className='flex-container-deadline flex-deadline'>
                    <button onClick={ this.updateDeadline } className='deadline-btn' disabled={ this.state.closed }>Update Project</button>
                    <button onClick={ this.closeDeadline }  className='deadline-btn close-btn' disabled={ this.state.closed }>Close Project</button>
                </div>
                
                <div className='status-message-container'>
                    { this.state.message && <p className='update-ok'>{ this.state.message }</p> }
                    { this.state.errorMessage && <p className='update-error'>{ this.state.errorMessage }</p> }
                </div>
            </div>
        )
    }
}