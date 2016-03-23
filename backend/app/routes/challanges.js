var mongoose = require('mongoose');
var challangesModel = require('../models/chalanges.js');

module.exports = function(router) {
    'use strict';

    router.get('/challanges', function(req, res) {
        var emailLogin = 'cdad@mail.com';
        //var chalangeModel = new challangesModel();
        var query = {emailchalanger:emailLogin};
        if("received"  == req.direction) {
            query = {emailchalanged:emailLogin};
        }
        var challangesList = [];
        var queryBuilder = challangesModel.find(query, "emailchalanger emailchalanged",function(err, challanges){
            if(err) {
                console.log("error on retrieving list - ", err);
            }
            console.log("results ",challanges);
            challangesList = challanges;
        });
        console.log("queryBuilder - ", queryBuilder);
        queryBuilder.exec();
        res.json({ chalanges: challangesList });
    });

    router.post('/challanges', function(req, res) {
        var emailLogin = 'cdad@mail.com';
        var emailchalanged = req.body.emailchalanged;
        console.log(emailchalanged);
        var newChalange = new challangesModel({
            emailchalanger:emailLogin,
            emailchalanged:emailchalanged
        });


        var response = "saved";
        newChalange.save(function (err, newChalange) {
            if (err) response = "Error on save with the message "+err.message();
        });

        res.json({ message: response });
    });


}