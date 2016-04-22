var mongoose = require('mongoose');
var models = require('./schemas');
var fs = require('fs'),
  xml2js = require('xml2js');
var async = require('async');
var parser = new xml2js.Parser();

var ipnett = "166.166.0."; // Set your IP range nett. Same as found in nmap bash file.
var iprange = "255"; // select the range you want scanned.

mongoose.connect("localhost:27017/node_npm_viewer");

var arrhosts = [];
var arrip = [];
var arron = [];
var fault = false;

var createarray = function(callback) {
  for (var l = 1; l < iprange; l++) {
    arrip.push(ipnett + l);
  }
  console.log("Ip range array generated");
  callback();
};

var createonarray = function(callback) {
  arron = arrip.filter( function( el ) {
    return arrhosts.indexOf( el ) < 0;
  }

);
console.log("hosts to be set to OFF: " + arron);
  callback();
};

//##########################################################################################
// Make an array with all IP addresses found in the nmap xml file
var readxml = function(callback) {
  fs.readFile(__dirname + '/output.xml', function(err, data) {
    parser.parseString(data, function(err, result) {
      if (!err && JSON.stringify(result) !== null) {
arrhosts = [];
        for (k in result.nmaprun.host) {
          s = (result.nmaprun.host[k].address[0].$.addr);
          arrhosts.push(s);
        }

        //console.log("The following active hosts where found: " + arrhosts);
      } else {
        console.log("unable to read xml file");
        fault = true;
      }
    });
    callback();

  });
  //##########################################################################################


};
//##########################################################################################
// Checking to see if database is empty
var checkip = function(callback) {

  var itemsProcessed = 0;
  models.Computers.find({}, {}, {}, function(err, result) {
    if (result[0] !== undefined && fault == false) {
      console.log("Found data, updating..");
      var itemsProcessed = 0;
      arron.forEach(function(item) {
        models.Computers.update({
            ip: item
          }, {
            state: "OFF",
          },
          function(err, rawResponse) {

            itemsProcessed++;
            if (itemsProcessed === arron.length) {
              console.log("All statuses set to OFF");
              callback();
            }
          });
      });

    } else if (fault == false) {

      console.log("No data found, creating.... ");
      //##########################################################################################
      //Storing new computers to the database

      arrip.forEach(function(item) {
        var newComputer = new models.Computers();

        newComputer.ip = item;
        newComputer.description = "dummy description";
        newComputer.state = "OFF";
        newComputer.date = new Date().getTime();

        newComputer.save(function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log("New IP saved " + item);
            itemsProcessed++;
            if (itemsProcessed === arrip.length) {
              console.log("All new IP's saved");
              callback();
            }
          }
        });
      });
    }
  });
callback();

};

//##########################################################################################
// Update state on all active computers
var updatecomputers = function(callback) {
  var itemsProcessed = 0;
  arrhosts.forEach(function(item) {
    models.Computers.update({
        ip: item
      }, {
        state: "ON",
        date: new Date().getTime(),
      },
      function(err, rawResponse) {

        itemsProcessed++;
        if (itemsProcessed === arrhosts.length) {
          console.log("Data updated");
          callback();
        }
      });

  });
};
//##########################################################################################
setInterval(function() {
  async.series([
    createarray,
    readxml,
    createonarray,
    checkip,
    updatecomputers,
  ], function(err) {
    
    arrip = [];
arron = [];



    fault = false;
    console.log("Work done, closing program....");
    //process.exit(1);
  });
}, 10000)

// If the nmap command is runned as sudo you can get computer name. Use the string below to access computer name
// result.nmaprun.host[k].hostnames[0].hostname[0].$.name


// To get the computer state use the following string
// result.nmaprun.host[k].status[0].$.state
