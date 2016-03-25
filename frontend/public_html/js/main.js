'use strict';

var rock = angular.module("rock", ['ngRoute']);



rock.controller("IndexCtrl",function($scope, $http){
    
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
            function(data){
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

        ;


