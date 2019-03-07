import React from 'react';
import '../App.css';

const InstructButton = (props) => {

    const handleInstructions = () => {
        props.state.setState({instructions: !props.state.state.instructions});
    }

    return (
        <button onClick={handleInstructions}>Instructions</button>
    )
}

export default InstructButton;