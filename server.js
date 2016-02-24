var app = require('express')();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var models = require('./schemas');
mongoose.connect("localhost:27017/node_npm_viewer");

app.set('view engine', 'ejs'); // set up ejs for templating

http.listen(3001, function() {

  console.log('listening on *:3001');

});

app.get('/', function(req, res) {
  models.Computers.find({}, {}, {}, function(err, result) {

  res.render('index.ejs', {
    data: result,
  });
  });

});
