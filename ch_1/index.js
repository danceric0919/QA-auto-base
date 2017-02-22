//說明要使用express這個套件
var express = require('express');
var app = express();

//當收到一個get request時，會回應Hello World到畫面上
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//讓網站運行在3000 port上
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});