import React, { Component } from 'react';
import { handleFetch } from '../../utils/AuthService';
import moment from 'moment';
import TextInput from '../TextInput';

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
            comments: [],
            fetching: false
        }


        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentDidMount() {
        handleFetch(`http://localhost:5000/api/project/${this.props.params.id}`)
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
        console.log(event);
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(this.state.name);
        return (
            <section>
                <h1>Project info</h1> 

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


                <div>
                    <label>Deadline from now</label>
                    <p>{moment(this.state.deadline).fromNow()}</p>
                </div>

                <div>
                    <label>Project added</label>
                    <p>{moment(this.state.addedTS).format("DD.MM.YYYY")}</p>
                </div>

                <div>
                    <label>Status</label>
                    <p>{this.state.closedTS}</p>
                </div>
            </section>
                
        )
    }
}