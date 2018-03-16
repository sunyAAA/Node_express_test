// 用户每次访问 都向mongodb里添加一条记录
var express = require('express')

var app = express();

var id = 10000

const MongoClient = require('mongodb')

app.get('/',function (req,res) {
  var url = 'mongodb://localhost:27017'
  MongoClient.connect(url,function (err,db) {
    if(err) {
      res.send("数据库连接失败")
      return
    }
    
    console.log('数据库连接成功')


    var lain = db.db('lain')   // 获取数据库对象

    // 向一个集合中插入文档，如果集合不存在 则会自动创建

    lain.collection('user').insertOne({
      "userId" : id,
      'mun' : parseInt(Math.random()*1000+10)
    },function (err,result) { 
      if(err){
        console.log('插入失败')
        return
      }
      console.log(result);
      id++
      res.send('操作成功')
      db.close()
    })
  })

})

app.listen(3000)