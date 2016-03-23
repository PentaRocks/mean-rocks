module.exports = function(router) {
  'use strict';
 
    router.post('/login', function(req, res) {
        var db = require('../../db.js');
        var conn = db.get();
        
        var User = require('../models/user.js');
        
        var newUser = new User({
            email: req.body.email,
            password: req.body.password            
        });
        newUser.save(function(err) {
            if (err) throw err;

            console.log('User saved: ', newUser);
        });
        res.json({ message: 'auth: login' });   
    });

    return router;
}