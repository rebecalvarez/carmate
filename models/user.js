const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  //added accessToken to user schema
  accessToken: {
    type: String,
    trim: true
  },
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
  services: { type: Schema.Types.ObjectId, ref: 'Services' }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
