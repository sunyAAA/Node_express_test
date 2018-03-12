var express = require('express')

var app = express()

// 在express 中使用模版引擎
app.set('view engine','ejs')      

app.get('/',function (req,res) { 
  //  默认在 ./views 中找模版
  res.render('home',{"arr":[
    '香蕉','苹果','橘子','核桃'
  ]})
 })
 app.listen(3000)
