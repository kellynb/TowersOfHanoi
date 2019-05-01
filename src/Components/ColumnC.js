import React from 'react';
import '../App.css';


const ColumnC = (props) => {
    const blockArr = props.block;
    let blocks = null;

    if (blockArr.length > 0 && blockArr.length < 4) {
        blocks = blockArr.map((block, index) => <div id={block} key={block} data-index={index} onClick={props.click}></div>)
    } else if (blockArr.length === 4) {
        alert(`Winner Winner. It took ${props.count} moves`);
        props.win();
        props.postNewScore();
    } else {
        blocks = null
    }

    return (
        <div className="Column1" id='C' onClick={props.parentClick}>
            {blocks}
        </div>
    )
}
  
  export default ColumnC;