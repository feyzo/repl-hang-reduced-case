'use strict';

var http = require('http'),
  url = require('url');

http.createServer(function (req, res) {
  var queryObject = url.parse(req.url, true).query;

  console.log(queryObject);
  
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(queryObject));
}).listen(8003);
