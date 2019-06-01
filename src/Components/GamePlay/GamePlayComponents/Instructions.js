import React from 'react';
import '../../../App.css';

const Instructions = (props) => {            
    return (
        <div>
            {props.instructions ?
                <section id="instructions">
                    <button type="button" className="close" aria-label="Close" onClick={props.handleInstructions}>
                        <span aria-hidden="true">×</span>
                    </button>
                    <p id="purpose">The purpose of the game is to move all blocks from the far left column to the far right column</p>
                    <ol>
                        <li> Click on a block to select the block</li>
                        <li> Then select the column to where you want to move the block</li>
                        <li> The block will only move if its smaller than the block it stacks on top of</li>
                        <li> If you select the same column the block is in, your move is not counted</li>
                    </ol>
                </section>
                :
            null}
        </div>
    )
}

export default Instructions;