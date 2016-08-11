'use strict';

angular.module('chatApp').factory('Auth', function($location, $sessionStorage) {
  return {
    login: function(user, cb) {
      $sessionStorage.user = user;
      $location.path('/chat');
      //cb(user);
    },
    logout: function(cb) {
      delete $sessionStorage.user;
      $location.path('/login');
    },
    isLoggedIn: function() {
      return $sessionStorage.user !== undefined;
    },
    getUser: function() {
      return $sessionStorage.user;
    }
  }
});
