import React, { Component } from 'react';
import DeadlineTable from '../DeadlineTable';
import Add from '../Add';
import { handleFetch } from '../../utils/AuthService';
import { baseApiUrl } from '../../utils/constants';
import moment from 'moment';
import './dashboard.css';

export default class Deadline extends Component {
  constructor() {
    super();

    this.state = {
      deadlines: []
    }

    this.handleAddDeadline = this.handleAddDeadline.bind(this);
  }

  componentDidMount() {
    handleFetch(`${baseApiUrl}/project/list`).then((result) => {
      if(result.error) {
        this.setState({error: true})
      }
      this.setState({deadlines: result});
    })
  }

  handleAddDeadline(deadline) {
    deadline.deadline = moment(deadline.deadline, "DD.MM.YYYY");
    handleFetch(`${baseApiUrl}/project`, {
      method: 'POST',
      body: JSON.stringify(deadline)
    }).then((result) => {
      if(result.error) {
        this.setState({error: true})
      } else {
        this.setState((prevState) => {
          var newState = prevState.deadlines;
          newState.push(result);
          return { deadlines: newState }
        })
      }
    })
  }

  render() {
    return (
      <section>
        <section className='flex-container-dashboard deadlines-list'>
          <h2 className='site-header'>Deadlines</h2>
          <Add handleAddDeadline={ this.handleAddDeadline }/>
        </section>
        {this.state.deadlines.length > 0 && !this.state.error ?
          <DeadlineTable deadlines={ this.state.deadlines }/> :
          <section className='flex-container-dashboard not-found'>
            <p className='throw-table'>(╯°□°）╯︵ ┻━┻</p>
            <h2 className='site-header'>No Deadlines!</h2>
          </section>
        }
      </section>
    )
  }
}
