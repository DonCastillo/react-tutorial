import React from 'react';

const Validation = (props) => {
    const inputTextLength = props.length;
    const minLength = 5;
    let message = '';
    let style = {};
    if (inputTextLength >= minLength) {
        message = 'Text too enough';
        style = {color: 'green'};
    } else if (inputTextLength === 0) {
        message = 'No text';
        style = {color: 'black'};
    } else {
        message = 'Text too short';
        style = {color: 'red'};
    }

    return <p style={style}>{message}</p>;
}


export default Validation;