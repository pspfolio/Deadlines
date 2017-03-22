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
                console.log(result)
                this.setState({ project: result })
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
                    this.state.project ? <section>
                    <h1>Project info</h1> 

                    <p>Project information</p>

                    <div>
                        <label>Project name</label>
                        <p>{this.state.project.name}</p>
                    </div>

                    <div>
                        <label>Customer</label>
                        <p>{this.state.project.customer}</p>
                    </div>

                    <div>
                        <label htmlFor='deadline'>Deadline</label>
                        <input 
                            name='deadline'
                            id='deadline'
                            type='text'
                            value={ this.state.project.deadline } 
                            onChange={ this.handleInputChange } />
                    </div>

                    <div>
                        <label>Deadline from now</label>
                        <p>{moment(this.state.project.deadline).fromNow()}</p>
                    </div>

                    <div>
                        <label>Project added</label>
                        <p>{moment(this.state.project.addedTS).format("DD.MM.YYYY")}</p>
                    </div>

                    <div>
                        <label>Status</label>
                        <p>{this.state.project.closedTS}</p>
                    </div>
                </section>
             : null
                    
                    }
                    </div>
                
        )
    }
}