import React, { Component } from 'react';
import DeadlineTable from '../../components/DeadlineTable';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import Filter from '../../components/Filter';
import { Link } from 'react-router';
import { loadDeadlinesByCount, loadDeadlinesByFilter } from '../../utils/DeadlineService';
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
        this.getDeadlines = this.getDeadlines.bind(this);
    }

    componentDidMount() {
        this.getDeadlines();
    }

    initDeadlines(deadlines) {
        this.setState({
            deadlines,
            loading: false
        });
    }

    updateFilter(filter) {
        this.setState({
            selectedFilter: filter
        }, this.getDeadlines);
    }

    getDeadlines() {
        this.setState({ loading: true })
        this.props.count ? loadDeadlinesByCount(this.props.count).then(this.initDeadlines) : 
                loadDeadlinesByFilter(this.state.selectedFilter).then(this.initDeadlines);
    }

    render() {
        const { loading, deadlines, selectedFilter  } = this.state;
        const { headline, count } = this.props;
        return (
            <section className='deadlines-container'>
                { !count && <Filter selectedFilter={ selectedFilter } updateFilter={ this.updateFilter } /> }
                <h2 className='site-header'>{ headline ? headline : 'Deadlines' }</h2>
                
                { loading ? <Loading /> 
                        : 
                        <div className='deadlines-wrapper'>
                            {deadlines.length > 0 ?
                                <DeadlineTable deadlines={ deadlines } /> :
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
