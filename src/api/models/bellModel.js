const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bellSchema = new Schema({
  name: {
    type: String,
    required: "Le titre est requis"
  },
  lien: {
    type: String,
    required: "Le lien est requis"
  }
});

module.exports = mongoose.model('Bell', bellSchema);
