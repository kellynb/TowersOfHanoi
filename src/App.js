import React, { Component } from 'react';
import './App.css';
import ColumnA from './ColumnA';
import ColumnB from './ColumnB';
import ColumnC from './ColumnC';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      blockGrab: '',
      parentId: '', 
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
                      parentId: parentDiv
                      });
      }
    }
  }


  parentClick = (e) => {
    if (this.state.clicks % 2 === 1) {
      const targId = e.target.id;
      const previousArr = this.state.parentId;
      const newArr = this.state[previousArr];
      newArr.pop();
      // why can i mutate state without settingState
      this.setState({[previousArr]: newArr,
                     [targId]: [...this.state[targId], this.state.blockGrab],
                     clicks: this.state.clicks +1,
                    })
      this.winState();              
      }

  }

  winState = () => {
    if(this.state.C.length === 3) {
      alert('Winner Winner.');
      this.setState({clicks: 0,
                     blockGrab: '',
                     parentId: '', 
                     A: ['d', 'c', 'b', 'a'],
                     C: []  
      })
    } 
  }
    // return this.state.clicks % 2 === 0 && objValues.includes(targ);
    // else if(this.state.clicks % 2 === 1 &&  divOptions.includes(targ)) {
    //   this.setState({clicks: click + 1});      
    // }


  render() {
    return (
      <div className="App">
        <div id="counter"> counter: {this.state.clicks}</div>
        <div id="columnView">
          <ColumnA block={this.state.A} click={this.handleClick} parentClick ={this.parentClick} />
          <ColumnB block={this.state.B} click={this.handleClick} parentClick ={this.parentClick} />
          <ColumnC block={this.state.C} click={this.handleClick} parentClick ={this.parentClick} />
        </div>
      </div>
    );
  }
}

export default App;
