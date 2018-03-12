var express = require('express')

var app = express();

//express 中的 get 请求通过 req.query 来获取参数对象

app.get('/',function (req,res) { 
  console.log(req.query)
 }).listen(3000)