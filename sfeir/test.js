var getHosto = require('./apis/googleplaces.js').getHospital;

getHosto("France", "Aire sur Adour", function(result){
	for (var r of result){
		console.log(r);
	}
});