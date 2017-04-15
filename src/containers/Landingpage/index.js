import React, { Component } from 'react';
import { Link } from 'react-router';
import './landingpage.css';

export default class Landingpage extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <header className='content-header'>
                    <nav className='header-flex-container'>
                        <div className='main-logo'>
                            DEADLINES
                        </div>
                        <ul>
                            <li>Get Started</li>
                            <li><Link to='/login'>Sign in -></Link></li>
                        </ul>
                    </nav>

                    <section id='header-text' className='header-flex-container'>
                        <h1>Are you ready to hit your deadlines?</h1>
                        <p>Deadlines helps you and your team to track deadlines and makes prioritizing easier. Don't miss deadlines never again.</p>
                        <button className='button-started' type='button'>Get Started</button>
                    </section>
                </header>
            </div>
        )
    }
}