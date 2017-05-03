import React, { Component } from 'react';
import './tabs.css';

export default class Tabs extends Component {
    constructor() {
        super();

        this.state = {
            selected: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        this.setState({
            selected: index
        })
    }

    render() {
        return (
            <div className='tabs-content'>
                <div className='tabs-headers'>
                    <ul>
                        {this.props.children.map((child, index) => 
                            <li key={index} 
                                onClick={() => {this.handleClick(index)}}
                                className={this.state.selected === index ? 'active' : ' '}>
                                {child.props.label}
                            </li>
                        )}
                    </ul>
                </div>
                {this.props.children[this.state.selected]}
            </div>
        )
    }
}