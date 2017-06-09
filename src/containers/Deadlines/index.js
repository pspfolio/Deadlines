import React, { Component } from 'react';
import DeadlineTable from '../../components/DeadlineTable';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import Filter from '../../components/Filter';
import { Link } from 'react-router';
import { loadDeadlines } from '../../utils/DeadlineService';
import './deadlines.css';

export default class Deadlines extends Component {
    constructor() {
        super();

        this.state = {
            deadlines: [],
            selectedFilter: 'All',
            loading: false
        }

        this.initDeadlines = this.initDeadlines.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true })
        loadDeadlines().then(this.initDeadlines);
    }

    initDeadlines(deadlines) {
        const { count } = this.props;
        const result = count && deadlines.length > count ? deadlines.slice(0, count) : deadlines;
        this.setState({
            deadlines: result,
            loading: false
        });
    }

    updateFilter(filter) {
        console.log(filter);
        this.setState({
            selectedFilter: filter
        });
    }

    render() {
        const { loading } = this.state;
        const { headline, count } = this.props;
        return (
            <section className='deadlines-container'>
                { !count && <Filter selectedFilter={ this.state.selectedFilter } updateFilter={ this.updateFilter } /> }
                <h2 className='site-header'>{ headline ? headline : 'Deadlines' }</h2>
                {loading && <Loading />}
                {!loading &&
                    <div className='deadlines-wrapper'>
                        {this.state.deadlines.length > 0 ?
                            <DeadlineTable deadlines={ this.state.deadlines } /> :
                            <NotFound />
                        }
                    </div>
                }

                {count && 
                <div className="deadlines-links">
                    <Link className="deadlines-readmore" to="/deadlines">More...</Link>
                </div>
                }
            </section>
        )
    }
}
