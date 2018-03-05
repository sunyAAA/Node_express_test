/**
 *  url 模块
 *      api:
 *           url.parse()   解析 URL url.format(urlObject)    //是上面 
 *           url.parse() 操作的逆向操作 
 *           url.resolve(from, to)      添加或者替换地址 
 */

// 创建 http 服务

var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
	// 输入 http://localhost:8001/login?pid=20&name=guagua  拿到url 传值

	//   console.log(req.url)      

	//设置响应头
	res.writeHead(200, {
		"Content-Type": "text/html;charset=UTF-8"
	})

	if (req.url !== '/favicon.ico') {
		// console.log(req.url)

		var result = url.parse(req.url, true) //第二个参数如果为 true 则返回一个查询键值对象

		console.log(result.query);

	}



	res.write("你好，这是我的第一个nodeJS程序")

	res.write(`<br><p>这是一段HTML</p>`)

	res.end() //    结束响应



})

server.listen(8001);