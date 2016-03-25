var mongoose = require('mongoose');
var gamesModel = require('../models/games.js');

module.exports = function(router) {
    'use strict';

    router.get('/games', function(req, res) {
        
        
        var query = {};
        console.log(req.query.opponent);
        
          query = { 'opponents': req.query.opponent };
         
        
        gamesModel.find(query, function(err, games){
            if(err) {
                console.log("error on retrieving list - ", err);
            }
            
            res.json( {games: games });
        });
        
        
        
    });

    router.post('/games', function(req, res) {
        console.log(req.body);
        var newChalange = new gamesModel(req.body);


        
        newChalange.save(function (err, newChalange) {
            if (err) {
                
                res.json({ message: err.message() });
            } 
            res.json({status: 'ok'});
        });

        
    });


};
