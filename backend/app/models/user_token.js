var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserTokenSchema = new Schema({
    user_id:   {type: String},
    type:       {type: String},
    created:    {type: String},
    expire:     {type: String}
}, {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

UserTokenSchema.virtual('value').get(function(){
    return this._id;
});

module.exports = mongoose.model('UserToken', UserTokenSchema);