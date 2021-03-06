
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , Session_Model = require('./models/session').Session_Model;

var app = express();
var server = http.createServer(app);

mongoose.connect('mongodb://localhost/ui_testing')

app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname+'/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'secret'}));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', routes.index);


server.listen(app.get('port'), function(){
  console.log("Express server listening on port "+app.get('port'));
});

var io = require('socket.io').listen(server);
io.set('log level', 1);

io.sockets.on('connection', function(socket){


//==========================================================
//                MOUSE MOVEMENT
//==========================================================
  socket.on('mouse_movements', function(movement){
    console.log(movement);
    Session_Model.update(
      {sessionID: movement.sessionID},
      {$push: 
        {movement: 
          {position: movement.position, url: movement.url}
        }
      },
      {upsert: true}, function(err){
        if(err){
          console.log("err: "+err)
        } else {
          console.log("Successfully added movement")
        }
      }
    )
  });


//==========================================================
//                MOUSE CLICK
//==========================================================
  socket.on('mouse_click', function(click){
    console.log(click);
    Session_Model.update(
      {sessionID: click.sessionID},
      {$push: {clicks: click.click}},
      {upsert: true},function(err){
        if(err){
          console.log("err: "+err)
        } else {
          console.log("Successfully added click")
        }
      }
      )
  });
  

//==========================================================
//                CLIENT INFORMATION
//==========================================================
  socket.on('client_information', function(data){
    console.log('session from client', data.SessionID)
    if(data.sessionID == null){
      socket.emit('sessionID', socket.id);
      data.sessionID = socket.id;
    }
    var address = socket.handshake.address;
    data.ip = address.address
    console.log(data);
    var newSession = new Session_Model();
    newSession.user_info = data;
    newSession.sessionID = data.sessionID;
    newSession.save(function(err){
      if(!err){
        console.log('successfully saved');
      } else {
        console.log("nothing was saved. try agian sucker...");
      }
    })
  });

// END OF SOCKET CONNECTION
});