"use strict";
var server = require("./server.js");
var util = require('util');

server.route({
  method: 'POST',
  path: '/playbook',
  handler: function (request, reply) {
    console.log("IN PLAYBOOK!");

    console.log(util.inspect(request.payload, false, null));

    reply().code(200);
  }
});

// server.route({
//   method: 'GET',
//   path: '/playbook',
//   handler: function (request, reply) {
//   }
// });