
function Users() {
  this._users = {}; // the list of users
}


Users.prototype.addUser = function(socket,pos) {
  this._users[socket.id] = [];
  this._users[socket.id].push(pos);
  socket.broadcast.emit('add user', {id: socket.id, pos : pos});

  socket.emit('list', this._users);
};

Users.prototype.removeUser = function(socket) {
  delete this._users[socket.id];

  socket.broadcast.emit('remove user', socket.id);
}

// Users.prototype.moveUser = function(socket,pos){
// 	this._users.push
// }
module.exports = Users;
