'use strict';

var http = require('http'),
  repl = require('repl');

var i = 0;
repl.start(' >', process.stdin, function (cmd, context, filename, callback) {
  var requestNumber = i++;
  console.time('process_time_' + requestNumber);

  var options = {
    host: 'localhost',
    port: 8003,
    path: '/?number=' + requestNumber,
    method: 'GET'
  };

  var timeout = setTimeout(function () {
    //Beep sound
    console.log('\u0007');
    console.log('Timed out:', requestNumber);
    process.exit();
  }, 20);

  var req = http.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      clearTimeout(timeout);
      console.log('Done:', requestNumber, JSON.parse(responseString));
      console.timeEnd('process_time_' + requestNumber);
    });
  });

  req.on('error', function(e) {
    console.log('Error', e);
  });

  req.end();
});