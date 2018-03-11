var http = require('http')
var querystring = require('querystring')

http.createServer(function (req, res) {
  if(req.url = '/favicon.ico') {
    return
  }
  if(req.url === '/dopost' && req.method.toLocaleLowerCase() === 'post' ) {
    // 监听 req 的 data 、end 事件 获取 post请求传输事件
    var postDate = ''
    // node 为了追求极致 post 请求通过 分成一个小段的chunk接受
    req.addListener('data',(chunk)=>{
      postDate+=chunk
    })

    req.addListener('end',function () {
      res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
      res.write(postDate.toString())    // name=guagua&age=55&sex=%E7%94%B7
      // 通过 querystring 模块 解析
      var dataObj = querystring.parse(postDate.toString())
      res.end(dataObj.name+dataObj.age+dataObj.sex)

    })

  }
}).listen(8002)