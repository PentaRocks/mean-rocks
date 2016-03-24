var _ = require("underscore");
var AbstractRouter = require('./AbstractRouter.js');
var Util = require("util");

function Auth(router) {
  
    Auth.super_.apply(this, arguments);
    var Error = require('../errors/Error.js');
    var User = require('../models/user.js');
    var UserToken = require('../models/user_token.js');
    
    this.initialize = function(){
        router.post('/login', login);
    }
    
    this.login = function(req, res) {
        if (typeof req.body.email == "undefined" 
                || typeof req.body.password == "undefined")
        {
            this.reply(res, new Error(9001, req.url));
            return;
        }
        
        /*
         * TODO - try to get a user with 
         * the login credentials else create the user
         */
        var newUser = new User({
            _id: req.body.email,
            password: req.body.password            
        });
        var that = this;
        newUser.save(function(err) {
            if (err) 
            {
                that.reply(res, new Error(2002, req.url, ["Can not create USER"]));
                return;
            }

            console.log('User saved: ', newUser);
            console.log('Creating access token for user...');
            var newToken = new UserToken({
                type: "login",
                user_id: newUser.email
            });
            newToken.save(function(err, newToken){
                if (err) 
                {
                    that.reply(res, new Error(2002, req.url, ["Can not create USER"]));
                    return;
                }
                
                console.log('New token created: ', newToken);
                that.reply(res, {loginToken: newToken.value});
            });
        });
    };
    
    // Bind scope of methods to AbstractRouter class preventing callbacks from destroying scope
    _.bindAll(this, 'login');
    this.initialize();
}

Util.inherits(Auth, AbstractRouter);
module.exports = Auth;