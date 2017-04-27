var http = require("http");
var map = require("through2-map");

var port = process.argv[2];
var server = http.createServer(function(req, res) {
	/*我的答案*/
	var buffers = [];
	req.on("readable", () => {
		var chunk;
		if (null !== (chunk = req.read())) {
			//buffer与字符串做拼接时会自动转换成string
			// console.log("read:" + chunk);
			buffers.push(chunk);
		}
	}).on("end", () => {
		var str = Buffer.concat(buffers).toString().toUpperCase();
		res.end(str);
	});
	/*标准答案*/
	/*
	if(req.method !== "POST"){
		return res.end("send me a PORT\n");
	}

	req.pipe(map(function(chunk){
		//chunk是buffer
		return chunk.toString().toUpperCase();
	})).pipe(res);
	 */
});
server.listen(port);