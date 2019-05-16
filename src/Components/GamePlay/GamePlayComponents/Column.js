import React, {Component} from 'react';
import '../../../App.css';

class Column extends Component {
    state = {
        color: "",
        id: ""
    }

    changeStyleEnter = (e) => {
        const blockId = e.target.id
        if(this.props.clicks % 2 === 1){
            this.setState({color: "#202020"})
        } else {
            this.setState({id: blockId})
        }
    }

    changeStyleExit = () => {
        if(this.props.clicks % 2 === 1){
            this.setState({color: ""})
        } else {
            this.setState({id: ""})
        }
    }

    stopStyle = (e) => {
        const blockTarg = e.target.id
        if(this.props.clicks % 2 === 1){
            this.setState({color: ""})
        } else {
            this.setState({id: blockTarg})
        }
    }

    render () {
        let blockArr =  this.props.block
        

        if (blockArr.length === 4 && (this.props.winColumn === this.props.id)) {
            alert(`Winner Winner. It took ${this.props.count} moves`);
            this.props.win();
            this.props.postNewScore();
        } 
        
        
        return (
            <div className="Column1" id={`${this.props.id}`} 
                onClick={this.props.parentClick}
                onMouseEnter={this.changeStyleEnter}
                onMouseOut={this.changeStyleExit}
                onMouseDown={this.stopStyle}
                style={{backgroundColor: this.state.color}}
                >
                { blockArr.map( (block,index) => 
                    <div id={block} 
                        key={block} 
                        data-index={index} 
                        onClick={this.props.click}
                        onMouseEnter={this.changeStyleEnter}
                        onMouseOut={this.changeStyleExit} 
                        onMouseDown={this.stopStyle} 
                        style={{border: block === this.state.id ? "white solid 4px" : ""}}
                        >
                    </div>)
                }
            </div>)
        }
  }
  
  export default Column;

