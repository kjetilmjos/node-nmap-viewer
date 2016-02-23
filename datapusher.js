query for første ip.
hvis ikke finnes opprett default og legg inn oppdatert info
hvis finnes oppdater info.
// load up the user model
var models = require('../app/models/schemas');

mongoose.connect("localhost:27017/node_npm_viewer"); // connect to our database

for (var l = 1; l < 255; l++) {
  m.push("166.166.0." + l);
}

--saving------------
var newPassportUser = new models.PassportUser();
var newUser = new models.User();

newUser.name    = req.body.name;
newUser.email = email;
newUser.points = 0;
newUser.last_reset = new Date().getTime();
newUser.approver = "Ikke valgt enda";
newUser.point_limit = 100;

newPassportUser.local.email = email;
newPassportUser.local.password = newPassportUser.generateHash(password);

newUser.save(function(err, thor) {
  if (err) return console.error(err);
  //console.dir(new_task);
});
----------------------------------
