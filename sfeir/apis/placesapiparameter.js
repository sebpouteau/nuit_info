var GoogleApiParameter = require("./googleapiparameter.js");

exports = class PlacesApiParameter extends GoogleApiParameter {
	constructor (key, location, radius, types ){
		super(key);
		this.location = location; 
		this.radius = radius; 
		this.types = types;
	}
}