import React, { Component } from 'react';
import DeadlineTable from '../DeadlineTable';
import Add from '../Add';
import './dashboard.css';

export default class dlDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadlines: [
        {
          name: 'Oma talous',
          customer: 'Ovenia',
          date: '28.02.2017'
        },
        {
          name: 'Oma talous',
          customer: 'Ovenia',
          date: '28.02.2017'
        }
      ]
    }

    this.handleAddDeadline = this.handleAddDeadline.bind(this);
  }

  handleAddDeadline(deadline) {
    this.setState(prevState => ({
      deadlines: [...prevState.deadlines, deadline]
    }));
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
