var mongoose = require('mongoose');
var models = require('./schemas');
var fs = require('fs'),
  xml2js = require('xml2js');
var parser = new xml2js.Parser();

var ipnett = "192.168.1.";
var iprange = "10";

mongoose.connect("localhost:27017/node_npm_viewer");

//##########################################################################################
// Make an array with all IP addresses found in the nmap xml file
fs.readFile(__dirname + '/output.xml', function(err, data) {
  parser.parseString(data, function(err, result) {
    arr = [];
    for (k in result.nmaprun.host) {
      s = (result.nmaprun.host[k].address[0].$.addr);
      arr.push(s);
    }
    console.log(arr);
  });
});


//##########################################################################################


// sjekk om det finnes ip addresser

/*var util = require('util');
var fs = require('fs'),
  xml2js = require('xml2js');

  var ss = "";
  var parser = new xml2js.Parser();



for (var l = 1; l < 255; l++) {
  m.push("166.166.0." + l);
}
*/
//--saving------------

//##########################################################################################
// Checking to see if database is empty
models.Computers.find({}, {}, {}, function(err, result) {
  if (result[0] !== undefined) {
    console.log("Found data: " + result);
    process.exit();
  } else {
    console.log("No data found, creating.... ");
    //##########################################################################################
    //Storing new computers to the database
    for (var l = 1; l < iprange; l++) {
      var newComputer = new models.Computers();

      newComputer.ip = ipnett + l;
      newComputer.description = "dummy description";
      newComputer.state = 1;
      newComputer.date = new Date().getTime();

      newComputer.save(function(err, thor) {
        if (err) return console.error(err);
        else {
          console.log("New IP saved")
            //
        }
      });
      //  process.exit();
    }

    //##########################################################################################
  }
});
//##########################################################################################



// If the nmap command is runned as sudo you can get computer name. Use the string below to access computer name
// result.nmaprun.host[k].hostnames[0].hostname[0].$.name


// To get the computer state use the following string
// result.nmaprun.host[k].status[0].$.state




//----------------------------------
/*
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
*/
