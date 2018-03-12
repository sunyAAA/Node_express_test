var express = require('express')

var app = express();


/*
  通过 use 来路由匹配      * 可以拓展的路由
  /admin
  /admin/login/....

*/
app.use('/admin', function (req, res) {       
  // http://127.0.0.1/admin/login/4555
  console.log(req.originalUrl)    //    /admin/login/4555
  console.log(req.baseUrl)      //      /admin
  console.log(req.path)         //      /login/4555
  res.end('你好')
  // res.write(req.originalUrl.toString() + '\n')
  // res.write(req.baseUrl.toString() + '\n')
  // res.write(req.path.toString() + '\n')

  // res.send('你好')
}).listen(8002)

