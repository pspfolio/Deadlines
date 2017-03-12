import React, { Component } from 'react';
import DeadlineTable from '../DeadlineTable';
import Add from '../Add';
import { handleFetch } from '../../utils/AuthService';
import { baseApiUrl } from '../../utils/constants';
import moment from 'moment';
import './dashboard.css';

export default class dlDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadlines: []
    }

    this.handleAddDeadline = this.handleAddDeadline.bind(this);
  }

  componentDidMount() {
    handleFetch(`${baseApiUrl}/project/list`).then((result) => {
      console.log('result', result);
      if(result.error) {
        this.setState({error: true})
      }

      this.setState({deadlines: result});
    })
  }

  handleAddDeadline(deadline) {
    deadline.priority = 1;
    deadline.deadline = moment(deadline.deadline, "DD.MM.YYYY");
    console.log(JSON.stringify(deadline));
    handleFetch(`${baseApiUrl}/project`, {
      method: 'POST',
      body: JSON.stringify(deadline)
    }).then((result) => {
      if(result.error) {
        this.setState({error: true})
      }
    })
  }

  render() {
    return (
      <section>
        <section className='flex-container-site'>
          <h2 className='site-header'>Deadlines</h2>
          <Add handleAddDeadline={ this.handleAddDeadline }/>
        </section>
        <DeadlineTable deadlines={ this.state.deadlines }/>
      </section>

    )
  }
}
