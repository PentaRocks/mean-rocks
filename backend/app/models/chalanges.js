var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var chalangesSchema   = new Schema({
    emailchalanger: String,
    emailchalanged: String,
    accepted:Boolean,
    winner:String
});


module.exports = mongoose.model('Challanges', chalangesSchema);