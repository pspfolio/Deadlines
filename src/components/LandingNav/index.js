import React from 'react';
import { Link } from 'react-router';
import './landingnav.css';

export default () => (
    <nav className='landing-nav-flex-container'>
        <div className='main-logo forward'>
            DEADLINES
        </div>
        <ul id='nav-items'>
            <li className='forward'>Get Started</li>
            <li className='forward'><Link to='/login'>Sign in -></Link></li>
        </ul>
    </nav>
)