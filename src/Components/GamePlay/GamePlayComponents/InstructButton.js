import React from 'react';
import '../../../App.css';

const InstructButton = (props) => {

    return (
        <button onClick={props.handleInstructions}>Instructions</button>
    )
}

export default InstructButton;