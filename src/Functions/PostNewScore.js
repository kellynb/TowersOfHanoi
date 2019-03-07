
const PostNewScore = (win) => {
        const newScore = {score: Math.floor(win.state.clicks/2)};
        const player = {player: win.state.player};

        fetch(`http://localhost:3001/score?score=${encodeURIComponent(newScore.score)}&name=${encodeURIComponent(player.player)}`, {
            method: "GET",
            headers: new Headers({'content-type': 'application/json'}),
        })
            .then(data => data.json())
            .then(res => {
                win.setState({score: res}); 
            })
}

export default PostNewScore;