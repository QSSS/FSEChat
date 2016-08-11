var path = require('path');

var rootPath = path.normalize(__dirname);

module.exports = {
  root: rootPath,
  port: process.env.PORT || 5001,
  mongoUrl: 'mongodb://localhost/fse-chat',
  endpoints: {
    postMessage: '/chat/message',
    getMessages: '/chat/messages'
  }
};
