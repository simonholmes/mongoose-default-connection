var mongoose = require( 'mongoose' );

var teamSchema = new mongoose.Schema({
  Country: String,
  GroupName: String,
  CreatedOn: Date
});

var Team = module.exports = mongoose.model('Team', teamSchema);
