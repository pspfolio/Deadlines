import React from 'react';
import TextInput from '../TextInput';
import TextData from '../TextData';
import moment from 'moment';

export default ({ deadline, handleInputChange, projectStatus, updateDeadline }) => (
    <div className='flex-container-deadline flex-deadline'>
        <TextInput
            label='Project name'
            errorMessage='Project name is required'
            name='name'
            id='name'
            type='text'
            value={deadline.name}
            required={true}
            onChange={handleInputChange} />

        <TextInput
            label='Customer'
            name='customer'
            id='customer'
            type='text'
            value={deadline.customer}
            required={true}
            onChange={handleInputChange} />

        <TextInput
            label='Deadline'
            name='deadline'
            id='deadline'
            type='text'
            value={deadline.deadline}
            required={true}
            onChange={handleInputChange} />

        <TextData label="Deadline from now" value={moment(deadline.deadline).fromNow()} />
        <TextData label="Project added" value={moment(deadline.addedTS).format("DD.MM.YYYY")} />
        <TextData label="Status" value={projectStatus} valueClass={projectStatus} />
    </div>
)