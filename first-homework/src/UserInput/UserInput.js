import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="form">
            <input onChange={props.change} type="text" value={props.username} />
        </div>
        
    );
}

export default userInput;