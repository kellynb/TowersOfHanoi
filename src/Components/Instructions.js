import React from 'react';
import '../App.css';

const Instructions = (props) => {

    const handleInstructions = () => {
        props.state.setState({instructions: !props.state.state.instructions})
    }

    let view = null;

    if (props.state.state.instructions) {
        view = 
        <section id="instructions">
            <button type="button" className="close" aria-label="Close" onClick={handleInstructions}>
                <span aria-hidden="true">×</span>
            </button>
            <ol>
                <li> Click on a block to select block</li>
                <li> Then click on a column to move block</li>
                <li> Block will only move if its smaller than the block it stacks on top</li>
                <li> If you click the same column the block is in, you restart the move</li>
                <li> Get all blocks in the far right column. Try to do so in the least amount of moves</li>
            </ol>
        </section>
    }
            
    return (
       view 
    )
}

export default Instructions;