import React from 'react';
import MatchOptions from './MatchOptions';
import '../App.css';


const StartForm = (props) => {

    const handleChange = (e) => {
        props.state.setState({value: e.target.value});
    }

    const handleSubmit = (e) => {
        props.state.setState({name: props.state.state.value,
                             value: "",})
        if(props.state.state.value) {
            getData()
        };
        e.preventDefault();
    }

    const getData = () => {
        const data = {name :props.state.state.value};
        fetch(`http://localhost:3001/names?name=${encodeURIComponent(data.name)}`, {
            method: "GET",
            headers: new Headers({'content-type': 'application/json'}),
        })
        .then(data => data.json())
        .then(res => {
            const returnName = res[0];
            if (returnName) {
                const allScores = returnName.score;
                 allScores.sort((a,b) => a-b);
                props.state.setState({match:res[0].name,
                                      score: allScores[0]});
            } else {
                createUser();
            }
        })
            
    }

    const createUser = () => {
        fetch("http://localhost:3001/name", {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({name: props.state.state.name,
                                  score: []})
        })
            .then(data => data.json())
            .then(res => {
               return props.state.setState({player:res.name,
                                            login: false})
            })
    }

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <label>Name : 
                    <input id="formtext" type="text" value={props.state.state.value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <MatchOptions state={props.state}/>
        </div>
        
        )
}


export default StartForm;