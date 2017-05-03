import React from 'react';
import DeadlineRow from '../DeadlineRow';
import './table.css';

export default ({ deadlines }) => (
  <div className='flex-container-table'>
    <table>
      <tbody>
        { deadlines.map((deadline, key) =>
          <DeadlineRow deadline={deadline} key={key} />
        )}
      </tbody>
    </table>
  </div>
)
