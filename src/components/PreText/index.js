import React from 'react';
import './pretext.css';

export default ({ header, text }) => (
    <section className='pre-text'>
            <h2>{ header }</h2>
            <p>{ text }</p>
    </section>
)