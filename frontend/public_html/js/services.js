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
}).
factory('GameService', function(){
    
    var games = [
        {_id: 1, 'challenger': 'cdad@mail.com', 'status': 'challenge'},
        {_id: 2, 'challenger': 'ancagfr@mail.com', 'status': 'challenge'},
        {_id: 3, 'challenger': 'ancagfr@mail.com', 'status': 'challenge'}
      ];
      
      function getGame(id) {
          for(var i = 0, len = games.length; i < len; i++){
              if(games[i]._id == id){
                  return games[i];
              }
          }
      }
      return {
          'getGame': getGame,
          'getGames': function(){ return games;}
      };
    
})      

;