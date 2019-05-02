import React from 'react';
import '../../../App.css';

const Counter = (props) => {
    return (
        <div id="counter"> Current Score: {props.count}</div>
    )
}

export default Counter;