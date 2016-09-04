var bodyParser = require('body-parser'),
  chatCtrl = require('../controllers/chat'),
  config = require('../config');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

exports.routes = function routes(app) {
  app.get(config.endpoints.getMessages, jsonParser, chatCtrl.getMessages);
  app.get('/', function(req, res) {
    res.render('index');
  });
}
