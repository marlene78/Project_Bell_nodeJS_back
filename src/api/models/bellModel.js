const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bellSchema = new Schema({
  name: String,
  lien: String
});

module.exports = mongoose.model('Bell', bellSchema);
