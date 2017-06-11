import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const styles = {
    underlineStyle: { borderColor: '#5B6FFD' },
    floatingLabelFocusStyle: { color: '#5B6FFD'}
}

export default ({ onChange, name, hintText, labelText}) => (
    <TextField
        onChange={ onChange }
        name={ name }
        floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
        underlineFocusStyle={ styles.underlineStyle }
        hintText={ hintText }
        floatingLabelText={ labelText }
    />
)