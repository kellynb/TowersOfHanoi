import React, { Component } from 'react';
import '../../App.css';
import Column from './GamePlayComponents/Column';
import Counter from './GamePlayComponents/Counter';
import HighScore from './GamePlayComponents/HighScore';
import InstructButton from './GamePlayComponents/InstructButton';
import Instructions from './GamePlayComponents/Instructions';

class GamePlay extends Component {
    state = {
        instructions: false,
    }

    handleInstructions = () => {
        this.setState({instructions: !this.state.instructions})
    }

    render () {
        const winColumn = this.props.keys[this.props.keys.length-1];
        return (
            <div> 
                <section id ="gameData">
                    <h2>Give it your best {this.props.player}</h2>
                    <div id="scoreBoard">
                        <Counter count={Math.floor(this.props.clicks/2)} />
                        <HighScore score={this.props.score}/>
                        <InstructButton handleInstructions={this.handleInstructions} />
                    </div>
                    <Instructions handleInstructions={this.handleInstructions} instructions={this.state.instructions} />
                </section>
                <div id="columnView">
                    {this.props.keys.map((column, index) => {
                        return (
                            <Column 
                                id ={column}
                                key ={index}
                                block={this.props[column]} 
                                click={this.props.handleClick} 
                                parentClick ={this.props.parentClick} 
                                clicks={this.props.clicks}
                                winColumn ={winColumn}
                                win={this.props.winState} 
                                postNewScore = {this.props.postNewScore}
                                count={Math.floor(this.props.clicks/2)} 
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GamePlay;