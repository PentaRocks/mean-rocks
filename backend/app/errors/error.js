/**
 * Error class
 * 
 * @param   {integer}   eCode
 * @param   {string}    route
 * @returns {Error}
 */
var Error = function(eCode, route, errors) {
    this.eCode = eCode;
    this.route = route;
    this.errors = (errors == undefined) ? {} : errors;
    
    this.errorCodes = {
        1001: {msg: "User already exists", statusCode: 400},
        1002: {msg: "User login error", statusCode: 400},
        1003: {msg: "Unauthorized", statusCode: 401},
        1004: {msg: "Unknown user", statusCode: 400},
        
        1005: {msg: "Invalid data", statusCode: 400},
        1006: {msg: "Unknown event", statusCode: 400},
    
        2001: {msg: "Internal server error", statusCode: 500},
        2002: {msg: "DB error", statusCode: 500},
        
        9001: {msg: "BAD request", statusCode: 400}
    };
    this.getMsg = function(){
        return this.errorCodes[this.eCode].msg;
    }
    this.getECode = function(){
        return this.eCode;
    }
    this.getRoute = function(){
        return this.route;
    }
    this.getHTTPStatusCode = function(){
        return this.errorCodes[this.eCode].statusCode;
    }
    // returns the error object that will be sent as response
    this.getResponseObj = function(){
        return {
            route:      this.getRoute(),
            ecode:      this.getECode(),
            // also override the error message if it's an internal server error
            message:    (this.getHTTPStatusCode() === 500)? 'Server hiccup' : this.getMsg(),
            errors:     this.errors
        };
    }
    
    return this;
};

module.exports = Error;