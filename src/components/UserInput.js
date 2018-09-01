import React from 'react';

const user_input = (props) => {
    return (
    <div>
        <p>Input your name here.</p>
        <input type="text" onChange={props.changed} value={props.username}/>
    </div>
    );
};

export default user_input;