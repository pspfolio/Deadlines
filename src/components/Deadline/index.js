import React, { Component } from 'react';
import { handleFetch } from '../../utils/AuthService';
import { baseApiUrl } from '../../utils/constants';
import moment from 'moment';
import TextInput from '../TextInput';
import TextData from '../TextData';
import './deadline.css';

export default class Deadline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            customer: '',
            addedTS: '',
            closedTS: '',
            deadline: '',
            priority: 1,
            closed: false,
            updateOk: false
        }


        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateDeadline = this.updateDeadline.bind(this);
    }
    
    componentDidMount() {
        handleFetch(`${baseApiUrl}/project/${this.props.params.id}`)
            .then((result) => {
                console.log(result);
                const {id, name, customer, addedTS, closedTS, deadline, priority, closed} = result;
                this.setState({ 
                    id,
                    name,
                    customer,
                    addedTS,
                    closedTS,
                    deadline,
                    priority,
                    closed
                })
            })
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            [name]: value
        });
    }

    updateDeadline() {
        handleFetch(`${baseApiUrl}/project/${this.state.id}`, {
            method: 'PUT',
            body: JSON.stringify(this.state)
        }).then((result) => {
            if(result.error) {
                this.setState({ error: true })
            } else {
                this.setState({ updateOk: true })
                setTimeout(() => {
                    this.setState({ updateOk: false })
                }, 2000)
            }
        })
    }

    get projectStatus() {
        return this.state.closed ? 'closed' : 'working';
    }

    render() {
        return (
            <div className='deadline-container'>
                <section className='flex-container-header flex-deadline'>
                <h2 className='header-deadline'>Project info</h2>
                </section>
                <section className='flex-container-deadline flex-deadline'>
                    
                    <TextInput
                        label='Project name' 
                        errorMessage='Project name is required'
                        name='name'
                        id='name'
                        type='text'
                        value={ this.state.name }
                        required={ true }
                        onChange={ this.handleInputChange } />

                    <TextInput 
                        label='Customer'
                        name='customer'
                        id='customer'
                        type='text'
                        value={ this.state.customer }
                        required={ true }
                        onChange={ this.handleInputChange } />

                    <TextInput 
                        label='Deadline'
                        name='deadline'
                        id='deadline'
                        type='text'
                        value={ this.state.deadline }
                        required={ true }
                        onChange={ this.handleInputChange } />

                    <TextData label="Deadline from now" value={ moment(this.state.deadline).fromNow() } />

                    <TextData label="Project added" value={ moment(this.state.addedTS ).format("DD.MM.YYYY") } />

                    <TextData label="Status" value={ this.projectStatus } valueClass={ this.projectStatus } />

                    <button onClick={ this.updateDeadline } className='deadline-btn'>Update Project</button>
                    <button className='deadline-btn close-btn'>Close Project</button>
                </section>
                <div className='status-message-container'>
                    { this.state.updateOk ? <p className='update-ok'>Project updated</p> : null }
                </div>
            </div>
        )
    }
}