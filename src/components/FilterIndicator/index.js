import React, { Component } from 'react';
import './filterIndicator.css';

export default class FilterIndicator extends Component {
    constructor() {
        super();

        this.state = {
            selected: 'filter-all'
        }

        this.isItemSelected = this.isItemSelected.bind(this);
    }

    isItemSelected() {
this.state.selected === 'filter-all' ? `filter ${ this.state.selected } active` : 'filter'
    }

    render() {
        return(
            <div className="filter-section">
                <div className={  }></div> All
                <div className='filter filter-active'></div> Active
                <div className='filter filter-completed'></div> Completed
            </div>
        )
    }
}