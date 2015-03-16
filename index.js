'use strict';

var http = require('http'),
  repl = require('repl');

var i = 0;
repl.start(' >', process.stdin, function (cmd, context, filename, callback) {
  var requestNumber = i++;

  var options = {
    host: 'localhost',
    port: 8003,
    path: '/?number=' + requestNumber,
    method: 'GET'
  };

  var timeout = setTimeout(function () {
    console.log('Timed out:', requestNumber);
  }, 10);

  var req = http.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      clearTimeout(timeout);
      console.log('Done:', requestNumber, JSON.parse(responseString));
    });
  });

  req.on('error', function(e) {
    console.log('Error', e);
  });

  req.end();
});