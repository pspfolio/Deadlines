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

                <div className='landing-flex-container space-around basic-margin-top'>
                    <section className='info-section'>
                        <h3 className='header-basic'>Track your deadlines</h3>
                        <p className='paragraph-basic'>Tacos poke yr tbh sriracha. Bespoke kinfolk glossier chillwave migas fingerstache. Helvetica snackwave ugh mlkshk prism retro. Skateboard flannel art party lomo meditation blog.</p>
                    </section>
                    <img alt='icon of tracking deadlines' src='img/track.svg' />
                </div>

                <div className='landing-flex-container space-around basic-margin-top'>
                    <img alt='icon of tracking deadlines' src='img/priorize.svg' />
                    <section className='info-section align-right'>
                        <h3 className='header-basic'>Priorize deadlines and enjoy ride</h3>
                        <p className='paragraph-basic'>Tacos poke yr tbh sriracha. Bespoke kinfolk glossier chillwave migas fingerstache. Helvetica snackwave ugh mlkshk prism retro. Skateboard flannel art party lomo meditation blog.</p>
                    </section>
                </div>

                <div className='landing-flex-container space-around basic-margin-top'>
                    <section className='info-section'>
                        <h3 className='header-basic'>Visualize deadlines</h3>
                        <p className='paragraph-basic'>Tacos poke yr tbh sriracha. Bespoke kinfolk glossier chillwave migas fingerstache. Helvetica snackwave ugh mlkshk prism retro. Skateboard flannel art party lomo meditation blog.</p>
                    </section>
                    <img alt='icon of tracking deadlines' src='img/visualize.svg' />
                </div>

                <div className='bots'>
                    <div className='bots-flex-container'>
                        <section>
                            <h3 className='header-basic'>Use the web application or choose from different bots</h3>
                            <p className='paragraph-basic'>Multiple bots for your help</p>
                        </section>

                        <div className='landing-flex-container space-around'>
                            <section className='bot-card'>
                                <img src='img/teams-icon.png' alt='Teams chat logo' />
                                <h4 className='bots-card-header'>Teams</h4>
                                <p className='bots-secondary-text'>Track deadlines with Teams chatbot for free.</p>
                                <p className='bots-secondary-text'>Bot is released in near future.</p>
                                <button className='button-started-card forward' type='button'>Get Started</button>
                            </section>
                            <section className='bot-card'>
                                <img src='img/slack-icon.png' alt='Slack chat logo' />
                                <h4 className='bots-card-header'>Slack</h4>
                                <p className='bots-secondary-text'>Track your deadlines through the Slack chatbot for free.</p>
                                <p className='bots-secondary-text'>Bot is released in near future.</p>
                                <button className='button-started-card forward' type='button'>Get Started</button>
                            </section>
                            <section className='bot-card'>
                                <img src='img/discord-icon.png' alt='Slack chat logo' />
                                <h4 className='bots-card-header'>Discord</h4>
                                <p className='bots-secondary-text'>Track your deadlines through the Discord chatbot for free.</p>
                                <p className='bots-secondary-text'>Bot is released in near future.</p>
                                <button className='button-started-card forward' type='button'>Get Started</button>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}