import React, { Component } from 'react';
import '../../App.css';
import Column from './GamePlayComponents/Column';
import WinColumn from './GamePlayComponents/WinColumn';
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
                    <Column 
                        id = {this.props.keys[0]}
                        block={this.props.A} 
                        click={this.props.handleClick} 
                        parentClick ={this.props.parentClick} 
                        clicks={this.props.clicks}
                        />
                    <Column
                        id = {this.props.keys[1]}
                        block={this.props.B} 
                        click={this.props.handleClick} 
                        parentClick ={this.props.parentClick}
                        clicks={this.props.clicks}
                         />
                    <WinColumn 
                        block={this.props.C} 
                        click={this.props.handleClick} 
                        parentClick ={this.props.parentClick}
                        clicks={this.props.clicks} 
                        win={this.props.winState} 
                        postNewScore = {this.props.postNewScore}
                        count={Math.floor(this.props.clicks/2)} 
                    />
                </div>
            </div>
        )
    }
}

export default GamePlay;