import React from 'react';

export default ({ deadline }) => (
  <tr>
    <td>{deadline.name}</td>
    <td>{deadline.customer}</td>
    <td>{deadline.date}</td>
    <td>24 days to go</td>
    <td>Ok</td>
  </tr>
)
