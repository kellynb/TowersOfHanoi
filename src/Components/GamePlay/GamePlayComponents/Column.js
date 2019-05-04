import React, {Component} from 'react';
import '../../../App.css';

class Column extends Component {
    state = {
        color: "",
        id: ""
    }

    changeStyleEnter = (e) => {
        const blockTarg = e.target.id
        if(this.props.clicks % 2 === 1){
            this.setState({color: "#202020"})
        } else {
            this.setState({id: blockTarg})
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
        const blockArr = this.props.block;
        
        
        return (
            <div className="Column1" id={`${this.props.id}`} 
                onClick={this.props.parentClick}
                onMouseEnter={this.changeStyleEnter}
                onMouseOut={this.changeStyleExit}
                onMouseDown={(e) => this.stopStyle(e)}
                style={{backgroundColor: this.state.color}}
                >
                {blockArr.length > 0 
                    ? blockArr.map( (block,index) => 
                            <div id={block} 
                                key={block} 
                                data-index={index} 
                                onClick={this.props.click}
                                onMouseEnter={(e) => this.changeStyleEnter(e)}
                                onMouseOut={(e) => this.changeStyleExit(e)}
                                onMouseDown={(e) => this.stopStyle(e)} 
                                style={{border: block === this.state.id ? "white solid 4px" : ""}}
                                >
                            </div>)
                    : null 
                }
            </div>
        )
    }
  }
  
  export default Column;