'use strict';

angular.module("rock")
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/challenges', {
        templateUrl: 'views/challenges.html',
        controller: 'ChallengesCtrl'
      })
        .when('/game/:gameId',{
            templateUrl: 'views/game.html',
            controller: 'GameCtrl'
        })
      
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

    
  });