import React, { Component } from 'react';
import './filterIndicator.css';

export default class FilterIndicator extends Component {
    constructor() {
        super();

        this.state = {
            selected: 'filter-all'
        }
    }

    render() {
        return(
            <div className="filter-section">
                <div className='filter filter-all'></div> All
                <div className='filter filter-active'></div> Active
                <div className='filter filter-completed'></div> Completed
            </div>
        )
    }
}