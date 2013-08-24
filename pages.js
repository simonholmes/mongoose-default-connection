var mongoose = require( 'mongoose' );
var Team = mongoose.model('Team');

exports.index = function (req, res) {
  Team.create({
    Country : "England",
    GroupName: "D",
    CreatedOn: Date.now()
  }, function(err, team) {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
     res.write(team.Country + ' created in Group ' + team.GroupName + '\n' + 'at ' + team.CreatedOn);
     res.end();
    }
  });
};