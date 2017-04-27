var http = require("http");
var fs = require("fs");

var port = process.argv[2],
	location = process.argv[3];
var server = http.createServer(function(req, res) {
	//下面这句是标准答案抄的，没有调用或者调用顺序不对会使用合适的默认值
	res.writeHead(200, {
		"content-type": "text/plain"
	});
	var fileStream = fs.createReadStream(location);
	fileStream.pipe(res);
});
server.listen(port);