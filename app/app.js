"use strict";
var server = require("./server.js");

server.route({
  method: 'POST',
  path: '/playbook',
  handler: function (request, reply) {
    console.log("IN PLAYBOOK!");
    console.log(request.payload);
    reply().code(200);
  }
});

// server.route({
//   method: 'GET',
//   path: '/playbook',
//   handler: function (request, reply) {
//   }
// });