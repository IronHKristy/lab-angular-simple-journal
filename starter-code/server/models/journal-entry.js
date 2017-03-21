const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const journalSchema = new Schema({
  date: { type: Date, required: true, default: Date.now},
  title: { type: String, required: true},
  content: {type: String, required: true}
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
