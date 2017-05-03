import React, { Component } from 'react';
import DeadlineTable from '../../components/DeadlineTable';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import Tabs from '../../components/Tabs';
import Pane from '../../components/Pane';
import { loadDeadlines, addDeadline } from '../../utils/DeadlineService';
import moment from 'moment';
import './dashboard.css';

export default class Deadline extends Component {
  constructor() {
    super();

    this.state = {
      deadlinesActive: [],
      deadlinesClosed: [],
      loading: false
    }

    this.handleAddDeadline = this.handleAddDeadline.bind(this);
    this.initDeadlines = this.initDeadlines.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true })
    loadDeadlines().then(this.initDeadlines);
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

  initDeadlines(deadlines) {
    const deadlinesActive = deadlines.filter(deadline => !deadline.closed);
    const deadlinesClosed = deadlines.filter(deadline => deadline.closed);

    this.setState({
      deadlinesActive,
      deadlinesClosed,
      loading: false
    });

  }

  render() {
    const { loading } = this.state;
    const itemsFound = this.state.deadlinesActive.length > 0 || this.state.deadlinesClosed.length > 0;
    return (
      <section>
        <h2 className='site-header'>Deadlines</h2>
        { loading && <Loading /> }
        { !loading && 
          <div className='tab-wrapper'>
            <Tabs selected={0}>
              <Pane label="Deadlines">
                { this.state.deadlinesActive.length > 0 ? 
                  <DeadlineTable deadlines={this.state.deadlinesActive} /> : 
                  <NotFound />
                }
              </Pane>
              <Pane label="History">
                { this.state.deadlinesClosed.length > 0 ?
                  <DeadlineTable deadlines={this.state.deadlinesClosed} /> :
                  <NotFound />
                }
              </Pane>
            </Tabs>
          </div>
        }
      </section>
    )
  }
}
