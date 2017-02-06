import React from 'react';
import moment from 'moment';

export default ({ deadline,  }) => (
  <tr>
    <td>{deadline.name}</td>
    <td>{deadline.customer}</td>
    <td>{deadline.date}</td>
    <td>{moment(deadline.date, "DD.MM.YYYY").fromNow()}</td>
    <td>Ok</td>
  </tr>
)
