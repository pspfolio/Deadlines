import React, { Component } from 'react';
import { handleFetch } from '../../utils/AuthService';
import moment from 'moment';

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
        console.log(this.props.params.id);

        handleFetch(`http://localhost:5000/api/project/${this.props.params.id}`)
            .then((result) => {
                console.log(result);
                const {id, name, customer, addedTS, closedTS, deadline, priority, closed} = result;
                this.setState({ 
                    id: id,
                    name: name,
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
        return (
            
            <div>
                {
                     <section>
                    <h1>Project info</h1> 

                    <p>Project information</p>

                    <div>
                        <label>Project name</label>
                         <input 
                            name='name'
                            id='name'
                            type='text'
                            value={ this.state.name } 
                            onChange={ this.handleInputChange } />
                    </div>

                    <div>
                        <label>Customer</label>
                        <p>{this.state.customer}</p>
                    </div>

                    <div>
                        <label htmlFor='deadline'>Deadline</label>
                        <input 
                            name='deadline'
                            id='deadline'
                            type='text'
                            value={ this.state.deadline } 
                            onChange={ this.handleInputChange } />
                    </div>

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

                    
                    }
                    </div>
                
        )
    }
}