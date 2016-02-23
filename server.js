var app = require('express')();
var http = require('http').Server(app);

app.set('view engine', 'ejs'); // set up ejs for templating

http.listen(3001, function() {

  console.log('listening on *:3001');

});
//	console.dir(k);
app.get('/', function(req, res) {
  res.render('index.ejs', {
  //  ledig: m.diff(i),
  //  opptatt: i,
  });

});
