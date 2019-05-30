import React from 'react';
import MatchOptions from './MatchOptions/MatchOptions';
import '../../App.css';


const StartForm = (props) => {
    
    return (
            <div id="login">
                <form onSubmit={props.handleSubmit}>
                    <label>
                        <span>Name:</span>
                        <input name="Name" id="formtext" type="text" value={props.value} onChange={props.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <MatchOptions handleMatch={props.handleMatch} match={props.match} player={props.player}/>
            </div>
        )
}


export default StartForm;