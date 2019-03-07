
const ValidMove = (val, props) => {
    const parentTarg = val.target.id;
    if (parentTarg === "A" || parentTarg === "B" || parentTarg === "C") {
        const childNodes = val.target.childNodes;
      if(childNodes.length !== 0) {
        const childVal = val.target.lastChild.id;
        return childVal > props.state.divVal 
       } else {
         return true
       }
    }    
    
}

  export default ValidMove;