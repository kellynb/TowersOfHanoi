import React from 'react';
import '../../../App.css';

const ColumnA =(props) => {
    const blockArr = props.block;

    return (
        <div className="Column1" id='A' onClick={props.parentClick}>
            {blockArr.length > 0 
                ? blockArr.map((block,index) => <div id={block}  key={block} data-index={index} onClick={props.click}></div>)
                : null 
            }
        </div>
    )
  }
  
  export default ColumnA;