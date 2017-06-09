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
                        <li className='filter-item' key={filter} onClick={ updateFilter.bind(null, filter) }><div className={`filter-icon filter-${filter.toLowerCase()} ${active}`}></div>{filter}</li>
                    )
                })
            }
        </ul>
    )
}