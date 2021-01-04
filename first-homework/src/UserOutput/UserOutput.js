import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="output">
            <p>{ props.username }</p>
            <p>{ props.children }</p>
        </div>
    );
}

export default userOutput;