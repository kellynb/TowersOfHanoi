import React, { Component } from 'react';
import './App.css';
import Gameplay from './Components/GamePlay/GamePlay'
import ValidMove from './Functions/ValidMove';
import StartForm from './Components/StartForm/StartForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      value: "",
      match: false,
      player: "",
      score: "",
      clicks: 0,
      blockGrab: '',
      parentId: '',
      divVal: '',
      A: ['d', 'c', 'b', 'a'],
      B: [],
      C: []  
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    this.setState({
      player: this.state.value,
      value: ""
      }, () => {
        if(this.state.player) {
          this.getData();
        };
    })
    e.preventDefault();
  }

  getData = () => {
    fetch(`/${this.state.player}`, {
      headers: {
              'content-type': 'application/json'
              },
      method: 'GET'
    })
      .then(data => data.json())
      .then(res => {
          const returnName = res[0];
          if (returnName) {
            if (returnName.score) {
              const allScores = returnName.score;
              allScores.sort((a,b) => a-b);
              this.setState({
                score: allScores[0]
              })
            }
            this.setState({
              match: true
            })
          } else {
            this.createUser();
          }
      })
  }

  createUser = () => {
    const player = this.state.player;
    
    const name = {name : player};
    fetch(`/${player}`, {
      headers: {
              'content-type': 'application/json'
              },
      method: 'POST',
      body: JSON.stringify(name)
    })
      .then( () => {
          return this.setState({
            login: true,
            score: ""
          })
    })
  }

  handleMatch = () => {
    this.setState({login: true})
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

    fetch(`/${this.state.player}/${Math.floor(this.state.clicks/2)}`, {
        headers: {
                'content-type': 'application/json'
                },
        method: 'PUT',
        body: JSON.stringify(playerScore)
      })  
        .then(data => data.json())
        .then(res => {
           this.setState({score: res}); 
      })
  }

  render() {
    const getKeys = Object.keys(this.state);
    const columnKeys = getKeys.slice(9,getKeys.length)
    
    return (
      <div className="App">
        {!this.state.login ? 
          <StartForm 
            match={this.state.match} 
            handleMatch={this.handleMatch} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
            value={this.state.value}
            player={this.state.player} 
          /> 
        : null}
        <section id="title">
          <h1>TOWERS OF HANOI</h1>
        </section>
        {this.state.login ? 
          <Gameplay
            keys={columnKeys}
            player= {this.state.player}
            score = {this.state.score}
            clicks = {this.state.clicks}
            postNewScore={() => this.postNewScore()}
            winState = {() => this.winState()}
            parentClick = {(e) => this.parentClick(e)}
            handleClick= {(e) => this.handleClick(e)}
            A = {this.state.A} 
            B = {this.state.B}
            C = {this.state.C}
             /> : null}
      </div>
    );
  }
}

export default App;
