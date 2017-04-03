import React, { Component } from 'react';
import { handleFetch } from '../../utils/AuthService';
import { baseApiUrl } from '../../utils/constants';
import DeadlineFields from '../../components/DeadlineFields';
import './deadline.css';

export default class Deadline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            customer: '',
            deadline: '',
            updateOk: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateDeadline = this.updateDeadline.bind(this);
        this.closeDeadline = this.closeDeadline.bind(this);
    }

    componentDidMount() {
        handleFetch(`${baseApiUrl}/project/${this.props.params.id}`)
            .then((data) => {
                this.setState({ ...data })
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
            if (result.error) {
                this.setState({ error: true })
            } else {
                this.setState({ updateOk: true })
                setTimeout(() => {
                    this.setState({ updateOk: false })
                }, 2000)
            }
        })
    }

    closeDeadline() {
        this.setState({ 
            closed: true,
            closedTS: new Date()
         }, this.updateDeadline);
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
                    <DeadlineFields 
                        deadline={ this.state }
                        handleInputChange={ this.handleInputChange }
                        projectStatus={ this.projectStatus }
                        updateDeadline={ this.updateDeadline } />

                <div className='flex-container-deadline flex-deadline'>
                    <button onClick={ this.updateDeadline } className='deadline-btn'>Update Project</button>
                    <button onClick={ this.closeDeadline }className='deadline-btn close-btn'>Close Project</button>
                </div>
                
                <div className='status-message-container'>
                    { this.state.updateOk ? <p className='update-ok'>Project updated</p> : null }
                </div>
            </div>
        )
    }
}