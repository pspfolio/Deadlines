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

        /* TODO: getByCount ja filterDeadlines alemmille kerroksille / rajapintaan */ 
        this.getDeadlinesByCount = this.getDeadlinesByCount.bind(this);
        this.filterDeadlines = this.filterDeadlines.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true })
        loadDeadlines().then(this.initDeadlines);
    }

    initDeadlines(data) {
        const { count } = this.props;
        const result = count && data.length > count ? this.getDeadlinesByCount(count, data) : this.filterDeadlines();
        this.setState({
            deadlines: result,
            loading: false
        });
    }

    getDeadlinesByCount(num, list) {
        console.log("deadlines by count", num);
        const result = list.slice(0, num);
        console.log("SCLIEC", result);
        return result;
    }

    filterDeadlines() {
        console.log("FILTEEERS")
    }

    updateFilter(filter) {
        this.setState({
            selectedFilter: filter
        });
    }

    render() {
        const { loading, deadlines, selectedFilter  } = this.state;
        console.log(deadlines);
        const { headline, count } = this.props;
        return (
            <section className='deadlines-container'>
                { !count && <Filter selectedFilter={ this.state.selectedFilter } updateFilter={ this.updateFilter } /> }
                <h2 className='site-header'>{ headline ? headline : 'Deadlines' }</h2>
                
                { loading ? <Loading /> 
                        : 
                        <div className='deadlines-wrapper'>
                            {deadlines.length > 0 ?
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
