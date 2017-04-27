var fs = require("fs");

var matches = 0;

fs.readFile(process.argv[2],"utf8",(error,data)=>{
	var str = data.toString();
	matches = str.match(/\n/g).length || 0;
	console.log(matches);
});