import React from 'react';

const user_output = (props) => {
    return (
        <div>
            <p>Hi, I am {props.username}. I live in {props.address}.</p>  
        </div> 
    );
};

export default user_output;