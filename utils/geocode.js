const request = require('request'); 

const geocode = (address, callback) => {

	let geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2J1LTA1IiwiYSI6ImNra2VsYXRwMDA5ZDUydm43bjdpMWY0emUifQ.DIgyfGiSUt7LO0V_pt0CjQ`;
	request({url: geoCodeURL, json:true }, (error, response) => {

		if (error) {

			callback("Unable to connect to geocoding services", undefined);
		
		} else if (response.body.features.length === 0) {

			callback(`No matches found for [${address}]. Try another search`, undefined);

		} else {

			const geoLocation = {
				longitude: response.body.features[0].center[0],
				latitude: response.body.features[0].center[1],
				location: response.body.features[0].place_name
			}

			// console.log(geoLocation)
			callback(undefined, geoLocation)
		}
	})
}

module.exports = geocode;