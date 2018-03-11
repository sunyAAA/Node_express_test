// 使用第三方 formidable包 处理post 请求和 文件上传
var http = require('http')
var fs = require('fs')
var path = require('path')
var sd = require('silly-datetime')
var fd = require('formidable')

http.createServer(function (req, res) {
  if(req.url === '/favicon.ico'){
    return
  }
  if(req.url === '/dopost' && req.method.toLocaleLowerCase() === 'post'){
    // 创建一个正在执行的表单
    var form = new fd.IncomingForm()

    form.uploadDir = './uploads'
    //  当parse中的回调函数执行时，所有的数据都已经传输完毕
    form.parse(req,function (err,fields,files) {
      // fields 保存所有文本  files 保存所有的 文件
      console.log(fields,files)

      // 使用fs模块 改名
      var t = sd.format(new Date(),'YYYYMMDDHHmmss')
      var ran = parseInt(Math.random()*8999+10000)
      var extname = path.extname(files.tupian.name)

      var oldPath =__dirname+ '/' + files.tupian.path;
      var newPath = __dirname+'/uploads/'+t+ran+extname
      console.log(oldPath,newPath)
      fs.rename(oldPath,newPath,function (err) {
        if(err) {
          throw Error('改名失败')
        }
      })
      res.end('success')
    })
  }
}).listen(8002)