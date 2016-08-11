var MessageModel = require('../models/message');

//Save One Message
var saveMessage = function saveMessage(data) {
  var newMsg = new MessageModel({
    content: data.content,
    username: data.username,
  });
  newMsg.save();
  console.log('newMsg saved!');
};

//Post One Message
exports.postMessage = function(socket) {
  return function(data){
    saveMessage(data);
    socket.broadcast.emit('message', data);
  }
};

//Read Messages
exports.getMessages = function getMessages(req, res) {
  MessageModel.find({}, {}, {
    timestamp: -1
  }, function(err, messages) {
    res.json(messages);
  });
};

//Call Back When a User Joins Chat
exports.joinRoom = function(io, socket, socket_id) {
  return function(data) {
    console.log(data.username + ' has joined!');
    if (data.username) {
      io.sockets.connected[socket_id].emit('joined', data);
      socket.broadcast.emit('joined', data);
      socket.username = data.username;
    }
  };
};

//Call Back When a User leaves Chat
exports.leaveRoom = function(socket) {
  return function(data) {
    console.log(data.username + ' left the chatroom');
    delete socket.username;
  };
}
