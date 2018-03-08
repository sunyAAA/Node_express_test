/**
 *  读取和写入的管道流
 * 
 */

// 通过管道流读取和写入大量的数据

var fs = require('fs')

var readStream = fs.createReadStream('./input.txt')

var str = ''
var count = 0

readStream.on('data', (chunk) => { // 监听段落读取时间
  str += chunk
  count++
})

readStream.on('error', () => {
  console.log('读取失败')
})

readStream.on('end', () => {
  console.log(count)
})