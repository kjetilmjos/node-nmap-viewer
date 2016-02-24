var mongoose = require('mongoose');
var models = require('./schemas');
var fs = require('fs'),
  xml2js = require('xml2js');
var async = require('async');
var parser = new xml2js.Parser();

var ipnett = "192.168.1.";
var iprange = "10";

mongoose.connect("localhost:27017/node_npm_viewer");

var arrhosts = [];
var arrip = [];

var createarray = function(callback) {
   for (var l = 1; l < iprange; l++) {
     arrip.push(ipnett+iprange);
   }
}


var readxml = function(callback) {
  //##########################################################################################
  // Make an array with all IP addresses found in the nmap xml file

  fs.readFile(__dirname + '/output.xml', function(err, data) {
    parser.parseString(data, function(err, result) {
      //var  arr = [];
      for (k in result.nmaprun.host) {
        s = (result.nmaprun.host[k].address[0].$.addr);
        arrhosts.push(s);
      }
      console.log(arrhosts);
    });
    return callback();
  });
  //##########################################################################################
  //process.exit();

};


var mitten = function(callback) {
  //console.log("mitten");
  return callback();
  //process.exit();
};

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
//--saving-----------


var checkip = function(callback) {

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
          if (err){
          console.log(err);
              return callback(err);
          }
          else {
            console.log("New IP saved");
          }
        });
        //  process.exit();
      }

 ///return callback();
      //##########################################################################################
    }
    //  return callback();
  });
  //##########################################################################################
  //process.exit();

};
/*
  //##########################################################################################
  models.Done_Task.find({
  user: {
    $in: query ( arrayet som heter arrip.) Oppdater status og dato på alle iper in query array
  },
  
  users_to_approve.forEach(function(item) {
    bruk søkeresultatet over og kjør en for each på det.
    
  }
  example of how to update fields
    // APPROVE TASK  =========================
  app.post('/husmor/approve_task', isLoggedIn, function(req, res) {
    models.Done_Task.update({
      _id: req.body.id
    }, {
      approved: true,
    }, function(err, rawResponse) {

      models.User.find({
        email: req.body.usermail
      }, {}, {}, function(err, userpoint) {

        models.User.update({
          _id: userpoint[0]._id
        }, {
          points: +userpoint[0].points + +req.body.task_points,
        }, function(err, rawResponse) {
          res.send("Sucess");
        })
      })
    })
  });

    //##########################################################################################
*/

async.series([
  createarray,
  readxml,
  checkip,
], function(err) {
  console.log("Work done, closing program....");
  process.exit();
});




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
