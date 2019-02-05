import React from 'react';
import './App.css';

const ColumnA =(props) => {
    const blockArr = props.block;
    console.log(props.click);
    return (
        <div className="Column1">
            {blockArr.length > 0 
                ? blockArr.map(block => <div id={block} key={block} onClick={props.click}></div>)
                : null 
            }
        </div>
    )
  }
  
  export default ColumnA;