const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dog = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  breed: String,
  imageUrl: String,
  owner: String
})


module.exports = mongoose.model('Dog', Dog);
