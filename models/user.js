const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleid: String,
  tasks: { type: Schema.Types.ObjectId, ref: 'Tasks'}
});

const User = mongoose.model('user', userSchema);

module.exports = User;