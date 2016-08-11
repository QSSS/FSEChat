'use strict';

angular.module('chatApp').factory('mySocket', function(socketFactory) {
  var socket = io.connect();

  var socketWrapper = socketFactory({
    ioSocket: socket
  });

  socketWrapper.disconnect = function() {
    socket.socket.disconnect();
  }

  socketWrapper.connect = function() {
    socket.socket.connect();
  }

  return socketWrapper;
})
