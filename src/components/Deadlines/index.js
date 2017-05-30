import React, { Component } from 'react';
import DeadlineTable from '../DeadlineTable';
import NotFound from '../NotFound';
import Loading from '../Loading';
import { loadDeadlines } from '../../utils/DeadlineService';
//import './dashboard.css';

export default class Deadline extends Component {
    constructor() {
        super();

        this.state = {
            deadlines: [],
            loading: false
        }

        this.initDeadlines = this.initDeadlines.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true })
        loadDeadlines().then(this.initDeadlines);
    }

    initDeadlines(deadlines) {
        this.setState({
            deadlines,
            loading: false
        });
    }

    render() {
        const { loading } = this.state;
        return (
            <section className='deadlines-container'>
                <h2 className='site-header'>Priority deadlines</h2>
                {loading && <Loading />}
                {!loading &&
                    <div className='deadlines-wrapper'>
                        {this.state.deadlines.length > 0 ?
                            <DeadlineTable deadlines={this.state.deadlines} /> :
                            <NotFound />
                        }
                    </div>
                }
            </section>
        )
    }
}
