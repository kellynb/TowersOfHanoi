const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    score: {
      type: [Number],
      default: undefined
    }
  });

const User = mongoose.model('User', UserSchema);
module.exports = User;