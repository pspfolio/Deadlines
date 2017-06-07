import React, { Component } from 'react';
import './filter.css';

export default ({ updateFilter, selectedFilter}) => {
    const filters = ['All', 'Active', 'Completed'];
    return (
        <ul className='filter-section'>
            {
                filters.map((filter) => {
                    const active = selectedFilter === filter ? 'active' : '';
                    return (
                        <li key={filter} onClick={ updateFilter.bind(null, filter) }><div className={`filter filter-${filter.toLowerCase()} ${active}`}>{filter}</div></li>
                    )
                })
            }
        </ul>
    )
}