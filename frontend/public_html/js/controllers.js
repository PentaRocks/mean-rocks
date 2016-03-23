'use strict';

angular.module("rock")
.controller("ChallengesCtrl", function($scope, $http, $location, GameService){
    $scope.games = GameService.getGames();
    $scope.accept = function(game) {
       console.log('accepted challenge by ' + game.challenger + ' , with id: ' + game._id);
       $location.path('/game/'+game._id);
    };
})

.controller("GameCtrl", function($scope, $http, $routeParams, GameService){
    console.log($routeParams);
    $scope.game = GameService.getGame( $routeParams.gameId );
    console.log($scope.game);
    $scope.actions = ['rock', 'paper', 'scisors'];
    $scope.play = function(action) {
        
      console.log('played ' + action);  
    };
})