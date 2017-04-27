module.exports = function(dirName, extName, callback) {
	var fs = require("fs");
	var path = require("path");
	fs.readdir(dirName, function(err, data) {
		if (err) {
			return callback(err);
		}
		var names = [];
		for (var i = 0, l = data.length; i < l; i++) {
			var name = data[i];
			if (path.extname(name).indexOf(extName) == 1) {
				names.push(name);
			}
		}
		return callback(null,names);
	});
}

/**
 * 标准答案
 *
 * var fs = require("fs");
 * var path = require("path");
 *
 * module.exports = function(dir,filterStr,callback){
 * 	fs.readdir(dir,function(err,list){
 * 		if(err){
 * 			return callback(err);
 * 		}
 *
 * 		list = list.filter(function(file){
 * 			return path.extname(file) === "."+filterStr;
 * 		});
 * 	});
 * }
 */