'use strict';

var rock = angular.module("rock", ['ngRoute']);


rock.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
        .when('/game',{
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

rock.controller("IndexCtrl",function($scope, $http){
    $scope.games = [
        {_id: 1, 'challenger': 'cdad@mail.com', 'status': 'challenge'},
        {_id: 2, 'challenger': 'ancagfr@mail.com', 'status': 'challenge'}
    ];
 $scope.users = [
        {_id: 1, 'email': 'cdad@mail.com'},
        {_id: 2, 'email': 'ancagfr@mail.com'}
    ];
})

.controller("LoginCtrl", function( $scope, $http, $location, $window){
    var ctrl = this;
    $scope.var1 = "sadf";
    $scope.data = {
        email: 'geta',
        pass: ''
    };
    $scope.login=function(){
        
        //send data to backend
        $http.post(
            '/api/login',
            $scope.data)
        .then(
            
            function(){
                $window.sessionStorage.token = $scope.data.email;
                $location.path('/');
            },
            function(data){
                $scope.status = 'failed';
                $scope.status_text = data;
            }
                    
        );
    };
    
})
.controller("GameCtrl", function($scope, $http){
    
})
        ;


