'use strict';

var express     = require('express');        // call express
var app         = express();                 // define our app using express
var bodyParser  = require('body-parser');
var fs          = require("fs");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;        // set our port

// MONGODB setup
// =============================================================================
//var mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Iganiq8o');

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();              // get an instance of the express Router

var controllerPath="./app/controllers/"; //add one folder then put your route files there my router folder name is routers
fs.readdirSync(controllerPath).forEach(function(file) {
    var ctrlName = controllerPath + file;
    require(ctrlName)(router);
    console.log(ctrlName + ' controller initialized');
});

// REGISTER OUR ROUTES -------------------------------

// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);