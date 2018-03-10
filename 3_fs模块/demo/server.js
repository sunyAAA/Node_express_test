var fs = require('fs')

//  1 .判断是否存在 ‘upload目录’

// fs.stat('upload', (err,state) => {

//     // 如果不存在
//     if(err) {
//       fs.mkdir('upload',(err)=>{

//         if(err) {
//           console.log('创建失败')
//           return false
//         }

//         console.log('创建成功')
//       })
//     }else {

//       console.log('目录已经存在')
//       console.log(`目录：${state.isDirectory()}`);

//     }


// })

var dirArr = []
fs.readdir('dir', (err, files) => {

	if (err) {

		console.log('目录读取失败')
		return false
	}

	//   for (let i = 0; i < files.length; i++) {
	//     const element = files[i];
	//     fs.stat(`dir/${element}`, (err,state)=> {
	//       if(err) {
	//         console.log('文件判断失败')
	//         return false
	//       }
	//       if(state.isDirectory()){
	//         dirArr.push(element)
	//         console.log(dirArr)
	//       }
	//     })
	//   }

	//  使用迭代器函数将异步变为同步

	(function iterator(i) {
		if(i === files.length) {
			console.log(dirArr)
			return
		} 
		fs.stat(`dir/${files[i]}`,function (err,state) {
			if(err){
				iterator(i+1)
				return
			}
			if(state.isDirectory()){
				dirArr.push(files[i])
			}
			iterator(i+1)
		  })
	})(0)
	

})