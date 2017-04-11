import React, { Component } from 'react';
import './landingpage.css';

export default class Landingpage extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <header>
                    <nav>
                        <div className='main-logo'>
                            DEADLINES
                        </div>
                        <ul>
                            <li>Get Started</li>
                            <li>Sign in -></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}