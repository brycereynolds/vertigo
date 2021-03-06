"use strict";

// TODO Try out Good for server logging - see https://github.com/hapijs/good

var Hapi = require('hapi');
var server = new Hapi.Server();
var port = (process.env.PORT || 3000);
var host = (process.env.host || '0.0.0.0');

console.log('Server starting on: ' + host + ':' + port);

// TODO More expressive logging here
// var server = new Hapi.Server({ debug: { request: ['error'] } });

server.connection({
  host: host,
  port: port
});

server.start(function (){
    console.log('Server running at:', server.info.uri);
});

module.exports = server;