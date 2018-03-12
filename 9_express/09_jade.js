var express = require('express')

var app = express();

// jade引擎的注册方式与ejs不同
app.engine('jade',require('jade').__express)

app.set('view engine','jade')

app.get('/',function (req,res) {
  res.render('test')
}).listen(3000)