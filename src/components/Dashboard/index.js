import React, { Component } from 'react';
import DeadlineTable from '../DeadlineTable';
import Add from '../Add';
import NotFound from '../NotFound';
import Loading from '../Loading';
import { handleFetch } from '../../utils/AuthService';
import { baseApiUrl } from '../../utils/constants';
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
    handleFetch(`${baseApiUrl}/project/list`).then((result) => {
      if(result.error) {
        this.setState({error: true})
      }
      this.setState({
        deadlines: result,
        loading: false
      });
    })
  }

  handleAddDeadline(deadline) {
    deadline.deadline = moment(deadline.deadline, "DD.MM.YYYY");
    handleFetch(`${baseApiUrl}/project`, {
      method: 'POST',
      body: JSON.stringify(deadline)
    }).then((result) => {
      if(result.error) {
        this.setState({error: true})
      } else {
        this.setState((prevState) => {
          var newState = prevState.deadlines;
          newState.push(result);
          return { deadlines: newState }
        })
      }
    })
  }

  render() {
    return (
      <section>
        <section className='flex-container-dashboard deadlines-list'>
          <h2 className='site-header'>Deadlines</h2>
          <Add handleAddDeadline={ this.handleAddDeadline }/>
        </section>
        {this.state.loading ? <Loading /> : 
        
          this.state.deadlines.length > 0 && !this.state.error ?
            <DeadlineTable deadlines={ this.state.deadlines }/> :
            <NotFound />
        }
        
      </section>
    )
  }
}
