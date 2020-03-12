const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bellSchema = new Schema({
  name: {
    type: String,
    required: "Le nom est requis"
  },
  lien: {
    type: String
  }
});

module.exports = mongoose.model('Bell', bellSchema);
