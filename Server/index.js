const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const all = require('./Routes/all');
const cors = require('cors')
mongoose.connect('mongodb://jello:a9bc839993@ds157895.mlab.com:57895/towers', {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(cors());
app.use(all);

app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);

});