var fs = require("fs");
var path = require("path");

var pathName = process.argv[2],
	extName = process.argv[3];
fs.readdir(pathName,(error,files)=>{
	for(var i=0;i<files.length;i++){
		var fileName = files[i];
		if(path.extname(fileName).indexOf(extName)==1){
			console.log(fileName);
		}
	}
});