import React from 'react';
import DeadlineRow from '../DeadlineRow';
import Tabs from '../../components/Tabs';
import Pane from '../../components/Pane';
import './table.css';

export default ({ deadlines }) => (
  <div>
  <div>
        <Tabs selected={0}>
      <Pane label="Tab 1">
        <div>This is tab1 content</div>
      </Pane>
      <Pane label="Tab 2">
        <div>This is tab2 content</div>
      </Pane>
    </Tabs>
  </div>
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
        { deadlines.map((deadline, key) =>
          <DeadlineRow deadline={deadline} key={key} />
        )}
      </tbody>
    </table>
  </div>
  </div>
)
