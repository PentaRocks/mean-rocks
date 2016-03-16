module.exports = function(router) {
  'use strict';
 
    router.get('/login', function(req, res) {
        
        res.json({ message: 'hooray! welcome to our api!' });   
    });
}