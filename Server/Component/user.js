const User = require('../Model/userModel');

exports.list=  function list(request, response) {
    const name = request.params
    User.find(name, (err,users) => {
        if (err) return console.error(err);
        return response.json(users);
    })  
}

exports.create = function create(request, response) {
    User.create(request.body, (err, users) => {
        if (err) return console.error(err);
        return response.json(users)
    })
}

exports.update = function update(request, response) {
    const name = request.body.player;
    const score = request.body.score;
    User.findOneAndUpdate({name: name}, {$push:{score: score}}, {new:true, projection: {score}}, (err, users) => {
            if (err) return console.error(err);
            const allScores = users.score;
            allScores.sort((a,b) => a-b)
            const bestScore = allScores[0];
            return response.json(bestScore);
        })
}