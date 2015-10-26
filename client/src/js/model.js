/**
  * model.js
  * Contains models
  */
(function() {
  'use strict';

  var app = angular.module('gps-tracking');
  // socket.io
  app.factory('socket', function() {
    return io.connect('/');
  });

  // users' positions
  app.value('users', {});

})();
