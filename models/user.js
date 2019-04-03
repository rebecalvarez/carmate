const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  imageUrl: {
    type: String,
    trim: true
  },
  googleId: {
    type: String,
    trim: true
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;