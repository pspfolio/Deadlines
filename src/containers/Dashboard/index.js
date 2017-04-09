import React, { Component } from 'react';
import DeadlineTable from '../../components/DeadlineTable';
import Add from '../../components/Add';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import { loadDeadlines, addDeadline } from '../../utils/DeadlineService';
import moment from 'moment';
import './dashboard.css';

export default class Deadline extends Component {
  constructor() {
    super();

    this.state = {
      deadlines: [],
      loading: false
    }

    this.handleAddDeadline = this.handleAddDeadline.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true })
    loadDeadlines().then((result) => {
      this.setState({
        deadlines: result,
        loading: false
      });
    })
  }

  handleAddDeadline(deadline) {
    deadline.deadline = moment(deadline.deadline, "DD.MM.YYYY");
    addDeadline(deadline).then((result) => {
      this.setState((prevState) => {
        const deadlines = prevState.deadlines.concat(result);
        return { deadlines }
      })
    })
  }

  render() {
    const { loading } = this.state;
    const itemsFound = this.state.deadlines.length > 0;
    return (
      <section>
        <section className='flex-container-dashboard deadlines-list'>
          <h2 className='site-header'>Deadlines</h2>
          <Add handleAddDeadline={this.handleAddDeadline} />
        </section>
        { loading && <Loading /> }
        { !loading && itemsFound && <DeadlineTable deadlines={this.state.deadlines} /> }
        { !loading && !itemsFound && <NotFound /> }
      </section>
    )
  }
}
