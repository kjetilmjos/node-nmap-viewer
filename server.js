var app = require('express')();
var http = require('http').Server(app);

var util = require('util');
var fs = require('fs'),
  xml2js = require('xml2js');

app.set('view engine', 'ejs'); // set up ejs for templating

var i = [];
var m = [];
var s = "";
var ss = "";
var parser = new xml2js.Parser();

http.listen(3001, function() {

  console.log('listening on *:3001');

});
//	console.dir(k);
app.get('/', function(req, res) {

  fs.readFile(__dirname + '/output.xml', function(err, data) {
    parser.parseString(data, function(err, result) {

      //	console.log(util.inspect(result, false, null));
      //console.log(JSON.stringify(result));
      i = [];

      for (k in result.nmaprun.host) {
        s = (result.nmaprun.host[k].address[0].$.addr);

        // This string is for reading computer name from nmap file ss = (result.nmaprun.host[k].hostnames[0].hostname[0].$.name);
        //    console.log((result.nmaprun.host[k].address[0].$.addr) + ' = ' + (result.nmaprun.host[k].status[0].$.state));
        //console.log(ss);
        //	var s = result.nmaprun.host[k].address[0].$.addr;
        //console.log(s);
        i.push(s);
        //console.log(result.nmaprun.host[s].status[0].$.state);
      }
      for (var l = 1; l < 255; l++) {
        m.push("192.168.1." + l);
      }
      Array.prototype.diff = function(a) {
        return this.filter(function(i) {
          return a.indexOf(i) < 0;
        });
      };

    });
    res.render('index.ejs', {
      ledig: m.diff(i),
      opptatt: i,
    });
    //  res.send("Opptatte addresser: " + i + "Ledige er: " + m.diff(i));

  });
});
