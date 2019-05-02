import React from 'react';
import '../../../App.css';


const HighScore = (props) => {
    return (
        <div id="highscore">Best Score: {props.score}</div>
    )
}

export default HighScore;