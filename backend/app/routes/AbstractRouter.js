var _ = require('underscore');

/**
 * Defines methods for all routers.
 * @param router
 * @constructor
 */
function AbstractRouter(router) {
    'use strict';

    var Error = require('../errors/Error.js');

    /**
     * Applies message to the response body. Used with errors.
     * @param response
     * @param message
     */
    this.reply = function (response, message) {
        if (message instanceof Error) {
            var httpStatusCode = message.getHTTPStatusCode();

            if (httpStatusCode == 401) {
                // unset login token cookie if it's an unauthorized response
            }
            // set the response's HTTP status code
            // set the error object as the response's body
            response.json(httpStatusCode, message.getResponseObj());
        } else {
            response.json(200, message);
        }
    };

    /**
     * Token for the request.
     * @param request
     * @returns {string}
     */
    this.getTokenFromHeader = function (request) {
        var header = request.headers.authorization || '', // get the header
                token = header.split(/\s+/).pop() || '';  // also get the token
        return token;
    };

    /**
     * Asynchronously retrieves the current user.
     * @param request
     * @param response
     * @param callback
     */
    this.getCurrentUser = function (request, response, callback) {
        var token = this.getTokenFromHeader(request);


    };

    /**
     * Assumes that authentication routing middleware is configured.
     * @param request
     * @returns {String}
     *
     * @see this.headerAuth
     */
    this.getUserId = function (request) {
        return request.params.user_id;
    };

    /**
     * header authentication
     * checks if the request is authorized and updates the user's token
     * in case it will expire sooner then the specified threshold
     */
    this.headerAuth = function (request, response, next) {
        var token = this.getTokenFromHeader(request);

    };

    // Bind scope of methods to AbstractRouter class preventing callbacks from destroying scope
    _.bindAll(this, 'reply', 'getTokenFromHeader', 'getCurrentUser', 'headerAuth');
}

module.exports = AbstractRouter;