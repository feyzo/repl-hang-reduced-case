'use strict';

var http = require('http'),
  url = require('url');

http.createServer(function (req, res) {
  console.time('process_time');
  var queryObject = url.parse(req.url, true).query;

  console.log(queryObject);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(queryObject));
  console.timeEnd('process_time');
}).listen(8003);
