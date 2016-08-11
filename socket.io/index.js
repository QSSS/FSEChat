var io = require('socket.io'),
  chat = require('../controllers/chat');


var socketConnection = function socketConnection(socket) {
    socket_id = socket.id;
    socket.on('joined', chat.joinRoom.call(null, io, socket, socket_id));
    socket.on('left', chat.leaveRoom(socket));
    socket.on('message', chat.postMessage(socket));
};

module.exports = function startIo(server) {
  io = io(server);
  io.sockets.on('connection', socketConnection);
  return io;
}
