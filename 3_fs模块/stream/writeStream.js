/** 
 *  流的方式写入文件
 *  
 */

var fs = require('fs')

var data = '夏の恋人'

var writeStream = fs.createWriteStream('./output.txt') // 创建一个写入管道

for (let i = 0; i < 20; i++) {

  var str = data + i

  writeStream.write(str, 'UTF-8') // 执行写入
}

writeStream.end() // 标记写入完成 才能出发 finish 和 error 事件

writeStream.on('finish', () => {

  console.log('finish')

})
writeStream.on('error', () => {

  console.log('error')
  
})