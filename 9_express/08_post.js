var express = require('express')

var bodyParser = require('body-parser')

var app = express();

//  experss 处理post请求需要使用bodyparse 作为中间件  如果表单中含有上传的文件 还是需要实使用 formidable

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.post('/',function (req,res) {
  //                                  **  通过 req.body 来解析
  console.log(req.body)
})