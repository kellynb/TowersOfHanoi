import React from 'react';
import './App.css';

const ColumnB =(props) => {
    const blockArr = props.block;
    return (
        <div className="Column1">
            {blockArr.length > 0 
                ? blockArr.map(block => <div id={block} key={block}></div>)
                : null 
            }
        </div>
    )
  }
  
  export default ColumnB;