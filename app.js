
var fallback = require('express-history-api-fallback');
var express = require('express');
var app = express();
var root = 'build'
app.use(express.static(root))
app.use(fallback('index.html', { root }))
app.listen(2222);

// 用history-api-fallback 启动 spa
