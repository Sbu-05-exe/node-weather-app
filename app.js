
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

let name="Port Elizabeth";

geocode(name, (error, data) => {

	if (error) {

		console.log("Error:" + error);
	
	} else {

		console.log("Data " + data);
		// forecast(response)
	}

});

forecast(25.610660000000003, -33.987057500000006, (error, data) => {

	if (error) {
	
		console.log("Error: " + error)
	
	} else {

		console.log("Data " + data)

	}

})