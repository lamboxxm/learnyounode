var params = process.argv.slice(2);

var value = params.reduce(function(preValue,currValue,currIndex,array){
	return +preValue+(+currValue);
});

console.log(value);