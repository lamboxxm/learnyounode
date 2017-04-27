var http = require("http");

var urls = process.argv.slice(2),
	length = urls.length;

var count = 0;
var datas = [length];
for (var i = 0; i < length; i++) {
	var url = urls[i];
	(function(url, idx) {
		http.get(url, function(response) {
			var buffers = [];
			response.on("data", function(data) {
				buffers.push(data);
			}).on("end", function() {
				datas[idx] = Buffer.concat(buffers).toString(); //default utf8
				callback(++count);
			});
		});
	})(url, i);
}

function callback(count) {
	if (count == length) {
		datas.forEach(function(data) {
			console.log(data);
		});
	}
}