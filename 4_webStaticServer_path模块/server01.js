var http = require('http')
var path = require('path')
var fs = require('fs')
var mime = require('mime-types')

http.createServer((req, res) => {
	var pathName = req.url
	if (pathName === '/favicon.ico') {
		return
	} // 过滤掉图标请求
	if (pathName === '/') { // 如果请求为空则默认返回index.html
		pathName = '/index.html'
	}
	var extname = path.extname(pathName)
	fs.readFile('./static' + pathName, (err, data) => {
		if (err) { // 如果静态资源找不到 则返回 404.html

			fs.readFile('./static/404.html', (error, errData) => {
				res.write(errData);
				res.end()

			})

			return false
		}
		//根据文件类型 自动设置 MIME类型
		var mimename = mime.lookup(extname)
		res.writeHead(200, {
			"Content-Type": `${mimename};charset=UTF-8`
		})
		res.write(data);
		res.end()

	})



}).listen(8002)
