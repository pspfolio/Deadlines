import React from 'react';
import './loading.css';

export default () => (
    <div className='flex-container-loading'>
        <h2 className='loading-header'>Loading</h2>
        <div className='loading'>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
    </div>
)