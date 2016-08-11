var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  config = require('./config'),
  MessageModel = require('./models/message'),
  server = require('http').Server(app);
  io = require('./socket.io')(server);

server.listen(config.port);

//MongoDB instance
var db = mongoose.connect(config.mongoUrl);
mongoose.connection.on('open', function() {
  console.log('Mongoose connected.');
})

app.use(express.static(config.root + '/public'));
app.use(express.static(config.root + '/bower_components'));
app.set('views', config.root + '/public/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('index');
})

require('./server/routes').routes(app);
