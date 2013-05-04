var mongoose = require('mongoose')
	, Schema = mongoose.Schema;


var mouse_movements_Schema = new Schema({
    x: Number,
    y: Number,
    dateTime: String
  });

  var clicks_Schema = new Schema({
    url: String,
    x: Number,
    y: Number,
    dateTime: String
  });

  var movements_Schema = new Schema({
    url: String,
    position: [mouse_movements_Schema]
  });

  var screens_Schema = new Schema({
    url: String,
    screenshots_location: String
  });

  var session_Schema = new Schema({
  	sessionID: String,
    movement: [movements_Schema],
    clicks: [clicks_Schema],
    screens: [screens_Schema],
    user_info: {
      sessionID: String,
      screen_size: {
      	width: Number,
      	height: Number
      },
      ip: String,
      browser: {
      	browser: String,
      	version: Number,
      	os: String
      },
    }
  });

var session_model = mongoose.model('session', session_Schema);

module.exports = {
	Session_Model: session_model
}
// { sessionID: 'SQrbpKiXDBbsiGVIbYzl',
//   screen_size: { width: 718, height: 802 },
//   browser: { browser: 'Chrome', version: 27, os: 'Mac' },
//   ip: '127.0.0.1' }