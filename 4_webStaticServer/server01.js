var http = require('http')

var fs = require('fs')

http.createServer((req, res) => {
  var pathName = req.url
  console.log(pathName)
  if (pathName != '/favicon.ico') {       // 过滤掉图标请求
    if (pathName === '/') {               // 如果请求为空则默认返回index.html
      pathName = '/index.html'
    }
    fs.readFile('static'+pathName, (err, data) => {
      if (err) {                                            // 如果静态资源找不到 则返回 404.html

        fs.readFile('static/404.html',(error,errData)=>{
          res.write(errData);
          res.end()
        })

        return false            
      }

      res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
      })
      res.write(data);
      res.end()

    })
  }else{
    return false
  }


}).listen(8001)