'use strict';

angular.module('chatApp')
    .controller('LoginCtrl', function($scope, $location, mySocket, Auth) {
        $scope.user = {};
        $scope.errors = {};
        $scope.login = function(form) {
            $scope.submittd = true;
            if (form.$valid) {
                Auth.login($scope.user);
            }
        }
    });
