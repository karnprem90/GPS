/**
 * controller.js
 * Contains the controller
 */
(function() {
    'use strict';

    var app = angular.module('gps-tracking');

    app.controller('LoginController', function($scope,$location) {
    		$scope.username = "Prem";
        $scope.ridername="Karn"
        $scope.passowrd = "prem123"
        $scope.login = function(user){
        	if((user.username === $scope.username || $scope.ridername) && user.password ===  $scope.passowrd){	
        		$location.path('/ride');
        	}
        }

       
    });
})();