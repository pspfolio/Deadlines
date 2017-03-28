import React, { Component } from 'react';
import { handleFetch } from '../../utils/AuthService';
import { baseApiUrl } from '../../utils/constants';
import moment from 'moment';
import TextInput from '../TextInput';
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


                    <div className='deadline-property'>
                        <label>Deadline from now</label>
                        <p>{moment(this.state.deadline).fromNow()}</p>
                    </div>

                    <div className='deadline-property'>
                        <label>Project added</label>
                        <p>{moment(this.state.addedTS).format("DD.MM.YYYY")}</p>
                    </div>

                    <div className='deadline-property'>
                        <label>Status</label>
                        <p className={ this.state.closed ? 'closed' : 'working'}>{this.state.closed ? 'Closed' : 'Working'}</p>
                    </div>

                    <button onClick={ this.updateDeadline } className='deadline-btn'>Update Project</button>
                </section>
                <div className='status-message-container'>
                    { this.state.updateOk ? <p className='update-ok'>Project updated</p> : null }
                </div>
            </div>
        )
    }
}