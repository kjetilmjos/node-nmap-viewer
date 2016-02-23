// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var NodeSchema = mongoose.Schema({
/*
var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  points: Number,
  last_reset: Date,
  approver: String,
  point_limit : Number,
});
*/

var IpSchema = mongoose.Schema({
  ip: String,
  description: String,
  state: Boolean,
  date: {
    type: Date,
    default: Date.now
  },
});

// create the model for users and expose it to our app
var Ipoverview = mongoose.model('Ipoverview', IpSchema);


module.exports = {
  Ipoverview: Ipoverview,
};
