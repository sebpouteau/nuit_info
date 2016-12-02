var get  = require('./apis/googleplaces.js').getGrossery;

get("France", "Paris", function(result){
	for (var r of result){
		console.log(r);
	}
});