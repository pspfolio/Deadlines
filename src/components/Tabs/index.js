import React, { Component } from 'react';

export default class Tabs extends Component {
    constructor() {
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
                <ul>
                    {this.props.children.map((child, index) => 
                        <li key={child} 
                            onClick={this.handleClick(index)}
                            className={this.state.selected === index ? 'active' : ''}>
                            {child.props.label}
                        </li>)}
                </ul>
                {this.props.children[this.state.selected]}
            </div>
        )
    }
}