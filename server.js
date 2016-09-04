var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  config = require('./config'),
  server = require('http').Server(app),
  io = require('./socket.io')(server);

server.listen(config.port);

//MongoDB instance
var db = mongoose.connect(config.mongoUrl);
mongoose.connection.on('open', function() {
  console.log('MongoDB connected.');
})

app.use(express.static(config.root + '/public'));
app.use(express.static(config.root + '/bower_components'));
app.set('views', config.root + '/public/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

require('./server/routes').routes(app);
