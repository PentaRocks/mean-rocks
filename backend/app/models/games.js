var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var gamesSchema   = new Schema({
    challenger: String,
    opponents: [String],
    status: String,
    winner: String 
});


module.exports = mongoose.model('Games', gamesSchema);