var fs = require('fs')

exports.getAllAlbums = function(callback){
  var albums = []
  fs.readdir('./uploads',function(err,files){
    if(err) {
      callback("uploads目录读取失败",null)
      return
    }
    (function iterator(i){
      fs.stat('./uploads/'+files[i],function(err,stats){
        if(i === files.length) {
          callback(null,albums)
          return
        }
        if(stats.isDirectory()) {
          albums.push(files[i])
        }
        iterator(i+1)
      })
    })(0)
  })
}

exports.getImagesByAlbumName = function (albumName , callback) {
  var images = [] ;
  fs.readdir('./uploads/'+albumName,function(err,files) {
    if(err) {
      callback(albumName+'读取失败',null)
      return
    }
    (function iterator(i){
      fs.stat('./uploads/'+albumName+'/'+files[i],function(err,stats){
        if(i === files.length) {
          callback(null,images)
          return
        }
        if(stats.isFile()) {
          images.push(files[i])
        }
        iterator(i+1)
      })
    })(0)
  })
}