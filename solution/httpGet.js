var http = require("http");

var url = process.argv[2];
http.get(url, function(response) {
	response.on("data", function(data) {
		var str = data.toString("utf8");
		console.log(str);
	});
});


/**
 * 标准答案
 *
 * var http = require("http");

	var url = process.argv[2];
	console.log(url);
	http.get(url,function(response){
		response.setEncoding("utf8");
		response.on("data",console.log);
		response.on("error",console.error);
	}).on("error",console.error);
 */