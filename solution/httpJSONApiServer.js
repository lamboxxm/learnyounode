var http = require("http");
var URL = require("url");

var port = process.argv[2];
var server = http.createServer(function(req, res) {
	/*我的答案*/
	if (req.method !== "GET") {
		return res.end("send me a GET\n");
	}

	var url = req.url;
	var urlMap = URL.parse(url, true);
	var query = urlMap.query;
	var pathName = urlMap.pathname;
	var obj = {};
	res.writeHead(200, {
		"Content-Type": "application/json"
	});
	var isoDate = new Date(query.iso);
	if ("/api/parsetime" == pathName) {
		var date = isoDate;
		var hour = date.getHours(),
			minute = date.getMinutes(),
			second = date.getSeconds();
		obj = {
			hour: hour,
			minute: minute,
			second: second
		};
	} else if ("/api/unixtime" == pathName) {
		obj = {
			unixtime: isoDate.getTime()
		};
	};
	res.end(JSON.stringify(obj));
});
server.listen(port);