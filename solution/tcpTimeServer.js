var net = require("net");

var port = process.argv[2];
var server = net.createServer(function(socket) {
	socket.end(now() + "\n");
});

server.listen(port);

function complemetion(num) {
	if (num.toString().length == 1) {
		return "0" + num;
	}
	return num;
}

/*标准答案*/
function zeroFill(num) {
	return (num < 10 ? "0" : "") + num;
}

function now() {
	var date = new Date();
	var year = date.getFullYear(),
		month = complemetion(date.getMonth() + 1),
		day = complemetion(date.getDate()),
		hour = complemetion(date.getHours()),
		minute = complemetion(date.getMinutes());
	return [year, "-", month, "-", day, " ", hour, ":", minute].join("");
}