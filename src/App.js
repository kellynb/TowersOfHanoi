import React, { Component } from 'react';
import './App.css';
import ColumnA from './ColumnA';
import ColumnB from './ColumnB';
import ColumnC from './ColumnC';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      columns: {
        A: ['d','c','b','a'],
        B: [],
        C: []
      }
    }
  }

  handleClick = (e) => {
    const targ = e.target.id;
    if (this.state.columns.A[this.state.columns.A.length-1] === targ) {
          console.log('hi');
    }
    
  }

  render() {
    return (
      <div className="App">
        <div onClick={this.handleClick}> counter: {this.state.counter}</div>
        <div id="columnView">
          <ColumnA block={this.state.columns.A} click={this.handleClick} />
          <ColumnB block={this.state.columns.B}/>
          <ColumnC block={this.state.columns.C}/>
        </div>
      </div>
    );
  }
}

export default App;
