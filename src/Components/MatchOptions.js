import React from 'react';
import '../App.css';

const MatchOptions = (props) => {
    let theMatch = null;

    const handleClick = (e) => {
        props.state.setState({player: props.state.state.match,
                              login: false});
    }

    if (props.state.state.match) {
        theMatch = 
        <div id='match'>
            <p> Hello {props.state.state.match}. To continue as this player press continue, else enter a new user name</p>
            <button onClick={handleClick} id='playerbutton'>Continue</button>
        </div>
    }
    return (
        theMatch
    )
}

export default MatchOptions;