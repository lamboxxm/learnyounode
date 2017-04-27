var http = require("http");

var url = process.argv[2];
http.get(url,function(response){
	var buffers = [];
	response.on("data",function(data){
		buffers.push(data);
	});
	response.on("end",function(){
		var bufferAll = Buffer.concat(buffers);
		console.log(bufferAll.length);
		console.log(bufferAll.toString("utf8"));
	});
});


/**
 * 标准答案
 *
 * 	var http = require("http");
	var bl = require("bl");

	var url = process.argv[2];
	http.get(url,function(response){
		response.pipe(bl(function(err,data){
			if(err){
				return console.error(err);
			}
			data = data.toString("utf8");
			console.log(data.length);
			console.log(data);
		}));
	});
 */