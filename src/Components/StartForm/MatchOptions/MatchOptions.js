import React from 'react';
import '../../../App.css';

const MatchOptions = (props) => {
    let theMatch = null;

    if (props.match) {
        theMatch = 
        <div id='match'>
            <p> Hello {props.player}. To continue as this {props.player} press continue, else enter a new user name</p>
            <button onClick={props.handleMatch} id='playerbutton'>Continue</button>
        </div>
    }
    return (
        theMatch
    )
}

export default MatchOptions;