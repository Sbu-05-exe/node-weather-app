const request = require('request');

const forecast = (longitude, latitude, callback) => {

	const LIMIT = 1;
	forecastURL = `http://api.weatherstack.com/current?access_key=6e2b9309ab6f486a46cd85bf2400d28c&query=${latitude},${longitude}&limit=${LIMIT}`;
	request ({ url: forecastURL, json:true }, (error, response) => {
		
		if (error) {
			callback("Unable to connect to weather services", undefined)
		} else if (response.body.error) {
			callback("Unable to find location", undefined);
		} else {
			const data = response.body.current;

			const result = {

				weather: data.weather_descriptions,
				temperature: data.temperature,
				feelslike: data.feelslike
			}

			callback(undefined, result)
			
		}
	
	})
}

module.exports = forecast;