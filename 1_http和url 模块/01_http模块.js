//Node  创建第一个应用
/**
 *  http 服务
 */

var http = require('http')          //  1. 引入

http.createServer(function(req,res) {     //  2. 使用 http.createServer 创建服务

    //  设置响应头部  resHeader
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})

    // 返回响应类容
    res.write("你好，这是我的第一个nodeJS程序")

    res.write(`<br><p>这是一段HTML</p>`)

    res.end()     //    结束响应

}).listen(8001);                // 监听端口并启动服务