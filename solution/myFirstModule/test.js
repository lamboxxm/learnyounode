var makeItModule = require("./makeItModule.js");

var pathName = process.argv[2],
	extName = process.argv[3];

makeItModule(pathName, extName, function(err,array) {
	if(err){
		console.log(err);
	}
	for (var i = 0, l = array.length; i < l; i++) {
		console.log(array[i]);
	}
});

/**
 * 标准答案
 *
 *
 * var makeItModule = require("./makeItModule.js");

	var pathName = process.argv[2],
		extName = process.argv[3];

	makeItModule(pathName, extName, function(err,array) {
		if(err){
			return console.error("There was an error",err);
		}

		array.foEach(function(file){
			console.log(file);
		});
	});
 */