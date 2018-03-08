/**
 *    管道流 同时执行读取和写入
 * 
 */

 var fs = require('fs')

 var readStream = fs.createReadStream('./output.txt')     // 创建一个可读流

 var writeStream = fs.createWriteStream('./input.txt')    //创建一个写入流

 //管道读写操作
 //读取 output.txt 文件内容 并写入到 input.txt 文件中

 readStream.pipe(writeStream)

 console.log('程序执行完毕')


