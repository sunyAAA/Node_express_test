// 使用 Data Access Object 

const express = require('express')

const app = express()

const db = require('./models/db')

const SKIP_MUN = 5

app.get('/', function (req, res) {
  db.insertOne('user', {
    'userID': 1115,
    'num': 44445
  }, function (err, result) {
    if (err) {
      console.log('插入失败')
      return
    }
    res.send(result)
  })
})

app.get('/find', function (req, res) {
  var page = req.query.page || 0

  db.find('user', {}, {
    'pageamount': SKIP_MUN,
    'page': page
  }, function (err, result) {
    if (err) {
      console.log(err)
    }
    res.send(result)
  })

})
app.listen(3000)