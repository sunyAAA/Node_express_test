var http = require('http')
var fs = require('fs')
var ejs = require('ejs')
var mime = require('mime-types')
var path = require('path')

http.createServer(function (req,res) {
  // 过滤 /favicon.ico
  if(req.url === '/favicon.ico'){
    return
  }
  
  if(req.url === '/'){
    url = '/index.html'
    resIndex(res);
    return
  }
  // url 判断 路由编写
  var pathObj = path.parse(req.url)
  url = pathObj.dir+'/'+decodeURI(pathObj.name)+pathObj.ext
  console.log(url)
  fs.stat(__dirname+url,function (err,stats) {
    
    if(err){
      res.end('404错误，检查路径')
      return
    }
    if(stats.isFile()){
      //  如果请求的是一个文件类型
      fs.readFile(__dirname+url,function (err,file) { 
        if(err){
          console.log(url);
          return
        }
        var extname = path.extname(url);
        console.log(extname);
        var mimename = mime.lookup(extname)
        res.writeHead(200,{"Content-Type":`${mimename}`})
        res.end(file)
      })
    }else if(stats.isDirectory()){
      fs.readdir(__dirname+url,function (err,files) {
        if(err){
          console.log(err)
          return
        }
        var arr = [];
        (function iterator(i){
          if(i<files.length){
            fs.stat(__dirname+url+'/'+files[i],function (err,stats) { 
              console.log('.'+url+files[i])
             
              if(stats.isFile()){
                arr.push(files[i])
              }
              iterator(i+1)
             })
          }else{
            fs.readFile('./view/index.ejs',function (err,data) { 
              if(err){
                // console.log(err)
                return
              }
              var album = [];
              for(var i = 0 ;i<arr.length ; i++ ){
                 album.push({
                   text: arr[i],
                   imgSrc : url+'/'+files[i]
                 })
              }
              var template = data.toString();
              var dictionary = {
                album
              }
              console.log(dictionary)
              var html = ejs.render(template,dictionary)
              res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
              res.end(html)
             })

          }
        })(0)
      })
    }
  })
  
 
  
}).listen(8002)


function resIndex(res) {
  fs.readdir('./uploads',function (err,files) {
    if(err){
      return
    }
    // console.log(files)
    var dirArr = [];
    (function iterator(i){
      if(i< files.length){
        fs.stat('./uploads/'+files[i],function (err,stats) {
          if(stats.isDirectory()){
            dirArr.push(files[i])
          }
          iterator(i+1);
        })
      }else{
        fs.readFile('./view/index.ejs',function (err,data) { 
          if(err){
            // console.log(err)
            return
          }
          var album= [];
          for(let i = 0 ;i<dirArr.length;i++){
            let obj = {}
            obj.text = dirArr[i]
            obj.srcImg =false
            album.push(obj)
          }
          var indexImg = "static/mayuri.jpg"
          var template = data.toString();
          var dictionary = {
            album,
            indexImg
          }
          console.log(dictionary)
          var html = ejs.render(template,dictionary)
          res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
          res.end(html)
         })
      }
    })(0)
  })
}
