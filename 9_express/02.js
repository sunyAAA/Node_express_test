var express = require('express')

var app = express()

// experss 中的静态服务
app.use(express.static('./static'))

// experss 中的静态服务和路由判断不冲突
app.get('/sy', function (req, res) {
  res.send('express太好啦')
})

app.listen(3030)