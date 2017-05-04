import React, { Component } from 'react';
import DeadlineTable from '../../components/DeadlineTable';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import Tabs from '../../components/Tabs';
import Pane from '../../components/Pane';
import { loadDeadlines } from '../../utils/DeadlineService';
import './dashboard.css';

export default class Deadline extends Component {
  constructor() {
    super();

    this.state = {
      deadlinesActive: [],
      deadlinesClosed: [],
      loading: false
    }

    this.initDeadlines = this.initDeadlines.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true })
    loadDeadlines().then(this.initDeadlines);
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
