import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import './deadlinerow.css';

export default ({ deadline }) => (
  <tr>
    <td className='deadline-name'><Link to={`/deadline/${ deadline.id }`}>{ deadline.name }</Link></td>
    <td>{ deadline.customer }</td>
    <td>{ moment(deadline.deadline).format("DD.MM.YYYY") }</td>
    <td>{ moment(deadline.deadline).fromNow() }</td>
  </tr>
)
