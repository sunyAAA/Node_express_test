/** 
 *    fs模块    文件读写相关
 * 
 *        api 
 *            fs.stat   检查是 文件 还是 目录
 *            fs.mkdir  创建目录
 *            fs.writeFile  创建文件
 *  
 */

const fs = require('fs')

//  1.fs.stat
fs.stat('html', (err, stats) => {

  if (err) {
    console.log(err)

    return false
  }

  console.log(`文件：${stats.isFile()}`)
  console.log(`目录：${stats.isDirectory()}`)
})

// 2 fs.mkdir (path , mode , callback ) 路径  目录权限（读写权限） 回调

// fs.mkdir('css',(err) => {
//   if(err) {
//     console.log(err)

//     return false
//   }

//   console.log('创建目录成功')
// })


// 3. fs.writeFile
//filename      (String)            文件名称
//data        (String | Buffer)    将要写入的内容，可以使字符串 或 buffer数据。
//options        (Object)           option数组对象，包含：
 //· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
 //· mode         (Number)        文件读写权限，默认值 438
 //· flag            (String)            默认值 ‘w'
//callback {Function}  回调，传递一个异常参数err。

// fs.writeFile('1.txt','hello nodeJS 如果不存在，就创建，存在则覆盖' , (err) => {
//   if(err) {
//     console.log(err)

//     return false
//   }

//   console.log('写入成功')
// })

fs.appendFile('2.txt','\n我是追加的',(err) => {
  if(err) {
    console.log(err)

    return false
  }

  console.log('追加成功')
} )


// 5. 读取文件   fs.readFile(fileName,options,callback)
//options        (Object)           option数组对象，包含：
 //· encoding   (string)            可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
 //· mode         (Number)        文件读写权限，默认值 438
 //· flag            (String)            默认值 ‘w'
fs.readFile('1.txt',{},(err,data) => {
  if(err) {
    console.log(err)

    return false
  }
  console.log(data)  //<Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 4a 53> 得到一个 Buffer实例
  console.log(data.toString())
})


//6. fs.readdir 读取目录    获取目录下所有的文件和目录

fs.readdir('html',(err,data) => {
  if(err) {
    console.log(err)

    return false
  }
  console.log(data)     // [ 'index.html', 'staic' ]
})


//7.  fs.rename  重命名       1.改名    2.剪切文件

// fs.rename('html/index.html','html/staic/basic.html',(err)=>{
//   if(err) {
//     console.log(err)

//     return false
//   }
//   console.log('文件剪切成功')
// })

// 8. fs.rmdir    删除文件夹
fs.rmdir('css',(err)=>{
  if(err) {
    console.log(err)

    return false
  }

  console.log('删除成功');
  
})
