const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dog = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  owner: String
})


module.exports = mongoose.model('Dog', Dog);
