import React, { Component } from 'react';
import DeadlineRow from '../DeadlineRow';
import './table.css';

export default class Table extends Component {
  render() {
    return (
      <div className='flex-container-table'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Customer</th>
              <th>Deadline</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.deadlines.map((deadline, key) =>
              <DeadlineRow deadline={deadline} key={key} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
