import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
    underlineStyle: { borderColor: '#5B6FFD' },
    floatingLabelFocusStyle: { color: '#5B6FFD'}
}

export default ({ onChange, name, hintText, labelText, value}) => (
    <TextField
        onChange={ onChange }
        name={ name }
        floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
        underlineFocusStyle={ styles.underlineStyle }
        hintText={ hintText }
        floatingLabelText={ labelText }
        fullWidth={ true }
        value={value ? value : ''}
        className="test"
    />
)