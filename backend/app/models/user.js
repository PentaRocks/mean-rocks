var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: {type: String},
    password: {type: String}
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

UserSchema.virtual('email').get(function () {
    return this._id;
});

module.exports = mongoose.model('User', UserSchema);