const request = require('request');

const forecast = (longitude, latitude, callback) => {

	const LIMIT = 1;
	const url = `http://api.weatherstack.com/current?access_key=6e2b9309ab6f486a46cd85bf2400d28c&query=${latitude},${longitude}&limit=${LIMIT}`;
	request ({ url, json:true }, (error, response) => {
		
		if (error) {
			callback("Unable to connect to weather services", undefined)
		} else if (response.body.error) {
			callback("Unable to find location", undefined);
		} else {
			const { current } = response.body;

			const result = {

				weather: current.weather_descriptions,
				temperature: current.temperature,
				feelslike: current.feelslike

			}

			callback(undefined, `${result.weather} \nIt is currently ${result.temperature} degrees out but it feels like ${result.feelslike} degrees`)
			
		}
	})
}

const TEST = false;
if (TEST) {
	forecast(25.610660000000003, -33.987057500000006, (err, data)=> {console.log(data)})
}

module.exports = forecast;