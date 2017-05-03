import React, { Component } from 'react';
import { loadDeadline, updateDeadline } from '../../utils/DeadlineService';
import DeadlineFields from '../../components/DeadlineFields';
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
                    { this.state.message && <p className='update-ok'>{ this.state.message }</p> }
                    { this.state.errorMessage && <p className='update-error'>{ this.state.errorMessage }</p> }
                </div>
            </div>
        )
    }
}