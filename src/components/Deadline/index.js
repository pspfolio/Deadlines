import React, { Component } from 'react';
import { handleFetch } from '../../utils/AuthService';
import moment from 'moment';

export default class Deadline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            project: {},
            fetching: false
        }
    }
    
    componentDidMount() {
        console.log(this.props.params.id);

        handleFetch(`http://localhost:5000/api/project/${this.props.params.id}`)
            .then((result) => {
                console.log(result)
                this.setState({ project: result })
            })
    }

    render() {
        return (
            <div>
                <section>
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
                        <label>Deadline</label>
                        <p>{moment(this.state.project.deadline).format("DD.MM.YYYY")}</p>
                    </div>

                    <div>
                        <label>Deadline from now</label>
                        <p>{moment(this.state.project.deadline).fromNow()}</p>
                    </div>

                    <div>
                        <label>Project added</label>
                        <p>{moment(this.state.project.addedTS).format("DD.MM.YYYY")}</p>
                    </div>
                </section>
                <section>

                </section>
            </div>
        )
    }
}