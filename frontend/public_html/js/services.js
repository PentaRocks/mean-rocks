'use strict';


    
angular.module('rock').config(function($httpProvider) {
    $httpProvider.interceptors.push([ '$location', '$window', function( $location, $window) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                
            }
        };
    }]);
});