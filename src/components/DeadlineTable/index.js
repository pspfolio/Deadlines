import React from 'react';
import DeadlineRow from '../DeadlineRow';
import './table.css';

export default ({ deadlines }) => (
  <div className='flex-container-table'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Customer</th>
          <th>Deadline</th>
          <th>From now</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        { deadlines.map((deadline, key) =>
          <DeadlineRow deadline={deadline} key={key} />
        )}
      </tbody>
    </table>
  </div>
)
