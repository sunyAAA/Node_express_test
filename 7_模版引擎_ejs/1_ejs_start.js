var ejs = require('ejs')
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  if(req.url === '/favicon.ico') {
    return
  }
  fs.readFile('./view/index.ejs', function (err, data) {
    if (err) {
      throw err
    }
    var template = data.toString();   // 模版
    var dictionary = {                // 字典
      a: '苹果，香蕉，鸡公煲',
      news:[
        {title:'无敌的小猪',count: 15},
        {title:'无敌的小狗',count: 10},
        {title:'无敌的小猫',count: 13},
        {title:'无敌的小鸡',count: 16}
      ]
    }
    var html = ejs.render(template,dictionary)      //生成 html片段
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    res.end(html)
  })
}).listen(8002)