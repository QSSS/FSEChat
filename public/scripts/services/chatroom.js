'user strict'

angular.module('chatApp').factory('chatroom', function(mySocket, Auth, $rootScope, $timeout, $location, Message) {

  var messages = Message.query();

  var scrollToBottom = function() {
    $timeout(function() {
      var chatbox = $('.panel-body');
      chatbox.animate({ scrollTop: chatbox.get(0).scrollHeight }, "fast");
    });
  };

  mySocket.on('joined', function(data) {
    if(data.username === Auth.getUser().username){
      scrollToBottom();
    }
  });

  mySocket.on('message', function(data) {
    messages.push(data);
    scrollToBottom();
  });

  return {
    getMessages: function() {
      return messages;
    },
    sendMessage: function(message) {
      var data = {
        content: message,
        username: Auth.getUser().username,
        timestamp: Date.now()
      }
      mySocket.emit('message', data);
      messages.push(data);
      scrollToBottom();
    },
    addUser: function(user) {
      mySocket.emit('joined', user);
    },
    removeUser: function(user) {
      mySocket.emit('left', user);
    }
  }
});
