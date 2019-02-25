import React, { Component } from 'react';
import './App.css';
import ColumnA from './Components/ColumnA';
import ColumnB from './Components/ColumnB';
import ColumnC from './Components/ColumnC';
import Counter from './Components/Counter';
import ValidMove from './GamePlay/ValidMove';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      blockGrab: '',
      parentId: '',
      divVal: '', 
      A: ['d', 'c', 'b', 'a'],
      B: [],
      C: []  
    }
  }

  
  handleClick = (e) => {
    if (this.state.clicks %2 === 0) {
      const targ = e.target;
      const targId = e.target.id;
      const parentDiv = targ.parentNode.id;
      const boardItem = this.state[parentDiv];
      const grabBlock = boardItem[boardItem.length-1];

      if (targId === grabBlock) {
        this.setState({blockGrab: grabBlock,
                      clicks: this.state.clicks +1,
                      parentId: parentDiv,
                      divVal: targId
                      });
      }
    }
  }


  parentClick = (e) => {
    if (this.state.clicks % 2 === 1) {
      if (ValidMove(e, this)) {
        const targId = e.target.id;
        const targParent = e.currentTarget.id;
        const previousArr = this.state.parentId;
        const newArr = this.state[previousArr];
        if (targParent !== previousArr) {
          newArr.pop();
          // why can i mutate state without settingState
          this.setState({[previousArr]: newArr,
                        [targId]: [...this.state[targId], this.state.blockGrab],
                        clicks: this.state.clicks +1,
                        })             
          }
      } else {
        this.setState({
            blockGrab: "",
            clicks: this.state.clicks-1,
            parentId: "",
            divVal: ""
        })
      }
    }   
  }


  render() {
    return (
      <div className="App">
        <Counter count={Math.floor(this.state.clicks/2)} />
        <div id="columnView">
          <ColumnA block={this.state.A} click={this.handleClick} parentClick ={this.parentClick} />
          <ColumnB block={this.state.B} click={this.handleClick} parentClick ={this.parentClick} />
          <ColumnC block={this.state.C} click={this.handleClick} parentClick ={this.parentClick} 
                   win={this} count={Math.floor(this.state.clicks/2)} />
        </div>
      </div>
    );
  }
}

export default App;
