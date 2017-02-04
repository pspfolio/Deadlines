import React, { Component } from 'react';
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
            <tr>
              <td>Oma talous</td>
              <td>Ovenia</td>
              <td>28.02.2017</td>
              <td>24 days to go</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Oma talous</td>
              <td>Ovenia</td>
              <td>28.02.2017</td>
              <td>24 days to go</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Oma talous</td>
              <td>Ovenia</td>
              <td>28.02.2017</td>
              <td>24 days to go</td>
              <td>Ok</td>
            </tr>
            <tr>
              <td>Oma talous</td>
              <td>Ovenia</td>
              <td>28.02.2017</td>
              <td>24 days to go</td>
              <td>Ok</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
