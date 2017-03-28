import React from 'react';

export default ({ label, value, valueClass }) => (
    <div className='deadline-property'>
        <label>{label}</label>
        <p className={ valueClass }>{value}</p>
    </div>
)
