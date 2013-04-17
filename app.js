
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();
var server = http.createServer(app);

app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname+'/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', routes.index);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port "+app.get('port'));
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  socket.on('mouse_movements', function(movement){
    console.log(movement);
  });
  socket.on('mouse_click', function(click){
    console.log(click);
  });
  socket.on('client_information', function(data){
    var address = socket.handshake.address;
    data.ip = address.address
    console.log(data);
  });
})