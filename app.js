const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');


let name = process.argv[2]

if (!name) {

	console.log("Please enter an address")

} else {

	geocode(name, (error, {location, latitude, longitude } = {} ) => {

		if (error) {
			return 	console.log("Error:" + error);
		}

		forecast(longitude, latitude, (error, data) => {

			if (error) {
				return console.log("Error: " + error)
			}

			console.log(location)
			console.log(data)
			
		})
		

	});

}

