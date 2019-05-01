import React, { Component } from 'react';
import './App.css';
import ColumnA from './Components/ColumnA';
import ColumnB from './Components/ColumnB';
import ColumnC from './Components/ColumnC';
import Counter from './Components/Counter';
import ValidMove from './Functions/ValidMove';
import HighScore from './Components/HighScore';
import InstructButton from './Components/InstructButton';
import Instructions from './Components/Instructions';
import StartForm from './Components/StartForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      bigHover: false,
      value: "",
      name: "",
      match: "",
      player: "",
      score: "",
      clicks: 0,
      blockGrab: '',
      parentId: '',
      divVal: '',
      instructions: false, 
      A: ['d', 'c', 'b', 'a'],
      B: [],
      C: []  
    }
  }

  
  handleClick = (e) => {
    if (this.state.clicks %2 === 0) {
      this.setState({bigHover: !this.state.bigHover});
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

  winState = () => {
    this.setState({ 
      clicks: 0,
      blockGrab: '',
      parentId: '', 
      A: ['d', 'c', 'b', 'a'],
      B: [],
      C: []
    })  
  }

  postNewScore = () => {
    const playerScore = {
      player: this.state.player,
      score: Math.floor(this.state.clicks/2)
    };

    fetch(`/${this.state.name}/${this.state.score}`, {
        headers: {
                'content-type': 'application/json'
                },
        method: 'POST',
        body: JSON.stringify(playerScore)
      })  
        .then(data => data.json())
        .then(res => {
           this.setState({score: res}); 
      })
  }

  render() {

    return (
      <div className="App">
        {this.state.login ? <StartForm state={this}/> : null}
        <section id="title">
          <h1>TOWERS OF HANOI</h1>
        </section>
        <section id ="gameData">
          <h2>Give it your best {this.state.player}</h2>
          <div id="scoreBoard">
            <Counter count={Math.floor(this.state.clicks/2)} />
            <HighScore score={this.state.score}/>
            <InstructButton state={this} />
          </div>
          <Instructions state={this} />
        </section>
        <div id="columnView">
          <ColumnA block={this.state.A} click={this.handleClick} parentClick ={this.parentClick} />
          <ColumnB block={this.state.B} click={this.handleClick} parentClick ={this.parentClick} />
          <ColumnC block={this.state.C} click={this.handleClick} parentClick ={this.parentClick} 
                   win={() => this.winState()} count={Math.floor(this.state.clicks/2)} postNewScore={() => this.postNewScore()} />
        </div>
      </div>
    );
  }
}

export default App;
