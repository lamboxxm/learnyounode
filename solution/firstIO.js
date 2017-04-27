var fs = require("fs");

var buffer = fs.readFileSync(process.argv[2]);

var str = buffer.toString();

var array = str.split("\n");
// var matches = str.test(/\n/g);

console.log(array.length-1);