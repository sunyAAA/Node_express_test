var express = require('express')

var app = express()

// express 中的路由

app.get('/',function (req,res)  {
  res.send('你好，express')
})

// experss 中的 正则表达式路由   req.params 得到一个匹配数组

app.get(/^\/student\/([\d]{10})$/,function (req,res) {
  res.send('您的学号是：'+req.params[0])
})

// express 中的:匹配路由
app.get('/teacher/:num',function (req,res) {
  res.send('老师的工号是：'+req.params.num)
  })
app.listen(3030)