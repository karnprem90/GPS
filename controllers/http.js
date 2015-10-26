

module.exports = function() {
  'use strict';
  var express = require('express')
    , http = require('http');

  var app = express()
    , server = http.Server(app);

  app.use('/', express.static(__dirname + '/../client'));

  var port = process.argv[2] || 8000;
  server.listen(port, function() {
    console.log('Server started : http://localhost:' + port);
  });

  return server;
}
