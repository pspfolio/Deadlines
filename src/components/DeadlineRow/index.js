import React from 'react';
import moment from 'moment';

export default ({ deadline }) => (
  <tr>
    <td>{ deadline.name }</td>
    <td>{ deadline.customer }</td>
    <td>{ moment(deadline.deadline).format("DD.MM.YYYY") }</td>
    <td>{ moment(deadline.deadline).fromNow() }</td>
    <td>Ok</td>
  </tr>
)
