'use strict';

var express     = require('express');        // call express
var http	= require('http');
var app         = express();                 // define our app using express
var bodyParser  = require('body-parser');
var fs          = require("fs");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3001);		// set our port
app.set('db', process.env.DB || 'localhost:27017/meanrockdb');

// MONGODB setup
// =============================================================================
var db = require('./db.js');
db.connect('mongodb://' + app.get('db'), function(){
    console.log("Connected to mongodb on: " + app.get('db'));
});

// log requests
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();              // get an instance of the express Router

var routePath = "./app/routes/"; //add one folder then put your route files there my router folder name is routers
fs.readdirSync(routePath).forEach(function(file) {
    if (!/abstract/i.test(file)){
        var routeName = routePath + file;
        require(routeName)(router);
        console.log(routeName + ' router initialized');
    }
});

// REGISTER OUR ROUTES -------------------------------

// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
http.createServer(app).listen(app.get('port'), function(){
    console.log('Magic happenes on port: ' + app.get('port'));	
});