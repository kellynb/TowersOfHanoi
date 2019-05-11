const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const all = require('./Routes/all');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());
app.use(all);

const port=process.env.PORT || 3001;
app.listen(port, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log(`Web server is now listening for messages on port ${port}`, err);

});