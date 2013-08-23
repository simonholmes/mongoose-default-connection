var http = require('http'),
    db = require('./model/db');

http.createServer(function (req, res) {
  res.writeHead(200, {
  'Content-Type': 'text/plain'
  });
 res.write('Hello world');
  res.end();
}).listen(8888, '127.0.0.1');