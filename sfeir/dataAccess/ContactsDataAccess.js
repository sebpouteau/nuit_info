var contacts = [
	{name: "Mego TERZIAN", address: "8 Rue Saint-Sabin, 75011 Paris", phone: "01 40 21 29 29", lat: "", lng: ""},
	{name: "Jean-Jacques Eledjam", address: "98 rue Didot, 75694 Paris Cedex 14", phone: "+33 (0)1 44 43 11 00", lat: "", lng: ""},
	{name: "Seán MacBride", address: "1 Easton Street, London, WC1X 0DW, Royaume-Uni", phone: "+44-20-74135500", lat: "", lng: ""},
	{name: "Eric Baker", address: "3 on Glenhove, Melrose Estate, 2196, Johannesburg, Afrique du Sud", phone: "+27-112836000", lat: "", lng: ""},
	{name: "Thomas Hammarberg", address: "3rd Flr Parkfield Place, Kanjata Road, off Waiyaki Way Westlands, Nairobi, Kenya", phone: " +254-20-4283000", lat: "", lng: ""},
	{name: "Irene Khan", address: "16/F Siu On Centre, 188 Lockhart Road, Wanchai, Hong Kong", phone: "+852 39637100", lat: "", lng: ""}
]


function GetContacts (country, city, callback){
	callback(contacts);
}

exports.getContacts = GetContacts;