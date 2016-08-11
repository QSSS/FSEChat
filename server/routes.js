var bodyParser = require('body-parser'),
  chatCtrl = require('../controllers/chat'),
  config = require('../config'),
  index = require('../controllers');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

exports.routes = function routes(app) {
  app.get(config.endpoints.getMessages,jsonParser, chatCtrl.getMessages);
  //app.get('/partials/*', index.partials);
  //app.get('/*', index.index);
}
