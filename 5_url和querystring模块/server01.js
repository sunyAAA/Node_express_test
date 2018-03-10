var http = require('http')

var url = require('url')

/**
 * 
 *  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐
    │                                            href                                             │
    ├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
    │ protocol │  │        auth         │        host         │           path            │ hash  │
    │          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
    │          │  │                     │   hostname   │ port │ pathname │     search     │       │
    │          │  │                     │              │      │          ├─┬──────────────┤       │
    │          │  │                     │              │      │          │ │    query     │       │
    "  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
    │          │  │          │          │   hostname   │ port │          │                │       │
    │          │  │          │          ├──────────────┴──────┤          │                │       │
    │ protocol │  │ username │ password │        host         │          │                │       │
    ├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
    │   origin    │                     │       origin        │ pathname │     search     │ hash  │
    ├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
    │                                            href                                             │
    └─────────────────────────────────────────────────────────────────────────────────────────────┘
 */

http.createServer((req, res) => {
	//  使用url 模块解析输入的网址
	//  如 http://localhost:8001/news?id=55544&sex=man&age=26#play
	var path = url.parse(req.url).pathname //  /news

	var query = url.parse(req.url).query //  id=55544&sex=man&age=26

	var queryObj = url.parse(req.url, true).query //  { id: '55544', sex: 'man', age: '26' }

	console.log(path);
	console.log(query);
	console.log(queryObj);



	res.end('hello url');


}).listen(8001)