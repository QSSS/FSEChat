'user strict';

angular.module('chatApp').controller('MainCtrl', function($scope, chatroom, Auth, $timeout) {
  $scope.username = Auth.getUser().username;
  $scope.messages = chatroom.getMessages();
  $scope.sendMessage = function() {
    if ($scope.newMessage) {
      chatroom.sendMessage($scope.newMessage);
      $scope.newMessage = "";
    }
  }

  $scope.logout = function() {
    chatroom.removeUser({username: $scope.username});
    Auth.logout();
  }
  chatroom.addUser({username: $scope.username});

});
