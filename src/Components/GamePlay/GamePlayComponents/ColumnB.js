import React from 'react';
import '../../../App.css';

const ColumnB =(props) => {
    const blockArr = props.block;
    return (
        <div className="Column1" id='B' onClick={props.parentClick}>
            {blockArr.length > 0 
                ? blockArr.map( (block,index) => <div id={block} key={block} data-index={index} onClick={props.click}></div>)
                : null 
            }
        </div>
    )
  }
  
  export default ColumnB;