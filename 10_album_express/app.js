/*
  依赖
*/

var express = require('express')

var app = express()

var router = require("./controller")

//模版引擎设置

app.set('view engine','ejs')

// 路由中间件
// 静态文件处理 所有能被识别的静态文件将优先路由出去
app.use(express.static('public'))
app.use(express.static('uploads'))

// 首页路由
app.get('/',router.showIndex) 

// 相册页路由
app.get('/:albumName',router.showAlbum)

app.get('/up',router.showUp)
app.post('/up',router.doPost)

// 最后的err路由 当上面所有的中间件路由无法匹配时显示
app.use(function (req,res) {
  res.render('err')
})

app.listen(3000)