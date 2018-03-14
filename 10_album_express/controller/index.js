var files = require('../models/file')

var formidable = require('formidable')

var path = require('path')

var fs = require('fs')

var sd = require('silly-datetime')

exports.showIndex = function (req, res,next) {
  files.getAllAlbums(function(err,albums){
    if(err){
      next() // 本次路由不处理改路径 交由下一个路由处理
      return
    }
    res.render('index',{
      albums 
    })
  })
}

exports.showAlbum = function (req, res,next) {
  var albumName = req.params.albumName

  files.getImagesByAlbumName(albumName,function(err,images) {
    if(err) {
      next()
      return
    }
    res.render('album',{
      albumName ,
      images:images
    })
  })

}

exports.showUp = function(req,res,next) {
  files.getAllAlbums(function(err,albums) {
    if(err) {
      next()
      return
    }
    res.render('up',{
      albums
    })
  })
}

exports.doPost = function (req,res,next) {
  if (req.url == '/up' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    
    form.uploadDir = path.normalize(__dirname+'/../tempup')
    form.parse(req, function(err, fields, files) {
      // res.writeHead(200, {'content-type': 'text/plain'});
      // res.write('received upload:\n\n');
      // res.end(util.inspect({fields: fields, files: files}));
      if(err){
        next()
        return
      }
      console.log(files,fields)
      //  判断文件尺寸  
      var size = files.image.size 
      if(size > 2000000 ) {
        res.send('图片必须小于2M')
        //删除缓存区的图片
        fs.unlink(files.image.path,function(){

        })
        return
      }

      var t = sd.format(new Date(),'YYYYMMDDHHmmss')
      var ran = parseInt(Math.random()*8999+10000)
      var extname = path.extname(files.image.name)

      var newPath = path.normalize(__dirname+'/../uploads/'+fields.dir+'/'+t+ran+extname)
      fs.rename(files.image.path,newPath,function (err) {
          if(err) {
            res.send('改名失败')
            return
          }
          res.send('上传成功');
        })  
    });
 
    return;
  }
 
}