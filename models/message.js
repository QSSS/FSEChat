var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MessageSchema = new Schema({
  content: {type: String},
  username: {type: String},
  timestamp: {type: Date, 'default': Date.now}
});

module.exports = mongoose.model('Message', MessageSchema);
