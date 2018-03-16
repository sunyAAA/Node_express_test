// Data Access Object       数据访问接口

// 封装了所有对数据库的常用操作

var MongoClient = require('mongodb')

const DB_NAME = 'lain'

function __connentDB(callback) {
  var url = 'mongodb://localhost:27017'

  MongoClient.connect(url, function (err, mongo) {
    db = mongo.db(DB_NAME)
    callback(err, db, mongo)
    // console.log(db)
  })
}

//插入数据
exports.insertOne = function (collection, data, callback) {
  __connentDB(function (err, db, mongo) {
    if(err) {
      callback(err,null)
      return
    }
    db.collection(collection).insertOne(data, function (err, result) {
      callback(err, result);
      mongo.close();
    })
  })
}

//查找数据
exports.find  = function(collection , json ,args , callback) {
    var length = arguments.length;
    if(length === 2) {
      callback = json 
      json = {},
      args= {
        "pageamount":0,
        "page":0
      }
    }else if(length === 3) {
      callback = args 
      args = {
        "pageamount":0,
        "page":0
      }
    }
    var skipNum = parseInt (args.pageamount) * parseInt (args.page)
    var limitNum = parseInt( args.pageamount)
    console.log(skipNum,limitNum)
    var result = []
    __connentDB(function (err,db,mongo) {
      if(err) {
        callback(err,null)
        return
      }
      var cursor = db.collection(collection).find(json).skip(skipNum).limit(limitNum)
      cursor.each(function (err,doc) {
        if(err) {
          callback(err,null)
          return
        }
        if(doc != null) {
          result.push(doc)
        }else{
          // 遍历结束
          callback(null,result)
          mongo.close()
        }
      })
    })
}
