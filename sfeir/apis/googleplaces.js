var geocoder = require("geocoder");
var googleplaces = require('node-googleplaces');

var API_KEY = 'AIzaSyArUUOi7DmNzp-5W9IlEI74hTw15g72O2w';
var places = new googleplaces(API_KEY);


function Search(country, city, types, callback) {
	geocoder.geocode(city + " " + country, function (err, data){
		if (err) throw err;
		var loc = data.results[0].geometry.location;
		var locPar = loc.lat + ',' + loc.lng;
		const param = {
			location: locPar,
			types: types,
			rankby: "distance",
			opennow: true
		}
		places.nearbySearch(param, function (err, results){
			var result = [];
			for (var attrs of results.body.results) {
				result.push({
					name : attrs.name,
					adress : attrs.vicinity,
					lat: attrs.geometry.location.lat,
					lng: attrs.geometry.location.lng
				});
			}
			if (callback) callback(result);
			
		});
	});
}

function GetHospitals (country, city, callback) {
	Search(country, city, 'hospital', callback);
}

function GetReceptionCenter (country, city, callback) {
	// appel bdd pour les camps de refugiées
}

function GetDoctors (country, city, callback) {
	Search(country, city, 'doctor', callback);
}

function GetGrossery (country, city, callback) {
	Search(country, city, 'shopping_mall|grocery_or_supermarket', callback);
}

function GetFoodBank (country, city, callback) {
	// appel bdd pour les banques alimentaires
}

function GetContacts (country, city, callback) {
	// appel bdd pour les contacts
}

exports.getHospital = GetHospitals;
exports.getReceptionCenter = GetReceptionCenter;
exports.getDoctors = GetDoctors;
exports.getGrossery = GetGrossery;
exports.getFoodBank = GetFoodBank;
exports.getContacts = GetContacts;