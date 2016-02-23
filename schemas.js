var mongoose = require('mongoose');

var ComputerSchema = mongoose.Schema({
  ip: String,
  description: String,
  state: Boolean,
  date: {type: Date}
});

// create the model for users and expose it to our app
var Computers = mongoose.model('Computers', ComputerSchema);

module.exports = {
  Computers: Computers,
};
