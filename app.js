
var fallback = require('express-history-api-fallback');
var express = require('express');
var app = express();
var root = 'build'
app.use(express.static(root))
app.use(fallback('index.html', { root }))
var server = app.listen(41892, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('TJCU site http://%s:%s', host, port);
});

// 用history-api-fallback 启动 spa
