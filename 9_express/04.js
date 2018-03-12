var http = require('http')

// 服务器启动后只执行一次
var a = 100;

http.createServer(function (req, res) {
  // 每次用户访问都会执行
  a++
  res.end('你好')
}).listen(3000)