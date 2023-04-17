const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  teamName: String,
  timeStamp: Date,
  randomPage: String,
});

module.exports = mongoose.model('Team', TeamSchema);
