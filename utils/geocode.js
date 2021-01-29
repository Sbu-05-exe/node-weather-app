const request = require('request'); 

const geocode = (address, callback) => {

	let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2J1LTA1IiwiYSI6ImNra2VsYXRwMDA5ZDUydm43bjdpMWY0emUifQ.DIgyfGiSUt7LO0V_pt0CjQ`;
	request({url, json:true }, (error, {body}) => {

		if (error) {

			callback("Unable to connect to geocoding services", undefined);
		
		} else if (body.features.length === 0) {

			callback(`No matches found for [${address}]. Try another search`, undefined);

		} else {

			const {center, place_name} = body.features[0]

			const geoLocation = {
				longitude: center[0],
				latitude: center[1],
				location: place_name
			}

			// console.log(geoLocation)
			callback(undefined, geoLocation)
		}
	})
}
	
const TEST = false;
if (TEST) {

	geocode("Port Elizabeth", (error, data) => {
		const {longitude, latitude} = data;;
		console.log(longitude + ", " + latitude);
	})
}

module.exports = geocode;