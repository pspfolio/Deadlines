import React, { Component } from 'react';
import Nav from '../Nav';
import Table from '../Table';
import './dashboard.css';

export default class dlDashboard extends Component {
  render() {
    return (
      <section>
        <Nav />
        <section className='flex-container-site'>
          <h2 className='site-header'>Deadlines</h2>
        </section>
        <Table />
      </section>

    )
  }
}
