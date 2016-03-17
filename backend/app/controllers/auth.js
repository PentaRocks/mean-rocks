module.exports = function(router) {
  'use strict';
 
    router.get('/login', function(req, res) {
        
        res.json({ message: 'auth: login' });   
    });

    return router;
}