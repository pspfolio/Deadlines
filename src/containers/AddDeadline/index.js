import React, { Component } from 'react';
import { addDeadline } from '../../utils/DeadlineService';
import moment from 'moment';

export default class AddDeadline extends Component {
    constructor() {
        super();
        
        this.handleAddDeadline = this.handleAddDeadline.bind(this);
    }

    handleAddDeadline(obj) {
        obj.deadline = moment(obj.deadline, "DD.MM.YYYY");
        addDeadline(obj).then((result) => {
            
        })
    }
    render() {
        return (
            <h2>ADDEADLINE</h2>
        )
    }
}