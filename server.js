//var app = require('express')();
var express  = require('express');
var app      = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var models = require('./schemas');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');

mongoose.connect("localhost:27017/node_npm_viewer");

app.set('view engine', 'ejs'); // set up ejs for templating
app.use('/static', express.static('views'));
app.use('/node_modules', express.static('node_modules'));

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/changedesc', function(req, res) {
  models.Computers.update({
    ip: req.body.computerip,
  }, {
    description: req.body.description,
  }, function(err, rawResponse) {
    //handle it
  })
  res.send("sucess");

});
