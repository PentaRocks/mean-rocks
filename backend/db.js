var mongoose   = require('mongoose');
var db;

exports.connect = function (url, callback){
    mongoose.connect(url);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        callback();
    });
}

exports.get = function() {
    return db;
}

exports.close = function(){
    // TODO implementation
}