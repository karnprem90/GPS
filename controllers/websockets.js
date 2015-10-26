
module.exports = function(server) {
  'use strict';
   var socketio = require('socket.io')
     , Users = require('../models/users');

   var io = socketio.listen(server)
     , users = new Users();

   io.sockets.on('connection', function(socket) {
    socket.on('moved', function(pos) {
         users.addUser(socket,pos);
      });
     
      socket.on('disconnect', function() {
        users.removeUser(socket);
      });
   });
}
