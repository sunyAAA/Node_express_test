var express = require('express')

var app = express();

//    express 中的路由顺序匹配

app.get('/', function (req, res, next) { 
  res.end('1')
  next()    // 如果不执行next() 当匹配到这里就会停止   反之则会继续向下寻找匹配的路由
})

app.get('/', function (req, res) {
  res.end('2')
})

app.listen(3000)