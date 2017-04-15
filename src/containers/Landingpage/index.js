import React, { Component } from 'react';
import { Link } from 'react-router';
import './landingpage.css';

export default class Landingpage extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <header className='content-header'>
                    <nav className='landing-flex-container space-between'>
                        <div className='main-logo forward'>
                            DEADLINES
                        </div>
                        <ul>
                            <li className='forward'>Get Started</li>
                            <li className='forward'><Link to='/login'>Sign in -></Link></li>
                        </ul>
                    </nav>

                    <section id='header-text' className='landing-flex-container space-between'>
                        <h1 className='forward'>Are you ready to hit your deadlines?</h1>
                        <p className='forward'>Deadlines helps you and your team to track deadlines and makes prioritizing easier. Don't miss deadlines never again.</p>
                        <button className='button-started forward' type='button'>Get Started</button>
                    </section>

                    <div id='boxes'>
                        <span></span>
                        <span></span>
                    </div>
                </header>

                <div className='landing-flex-container space-around info'>
                    <section className='info-section'>
                        <h3>Track your deadlines</h3>
                        <p>Tacos poke yr tbh sriracha. Bespoke kinfolk glossier chillwave migas fingerstache. Helvetica snackwave ugh mlkshk prism retro. Skateboard flannel art party lomo meditation blog.</p>
                    </section>
                    <img alt='icon of tracking deadlines' src='img/track.svg' />
                </div>

            </div>
        )
    }
}