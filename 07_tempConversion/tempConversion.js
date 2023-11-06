const convertToCelsius = function(fahrenheitVal) {
  let toCelsius = (fahrenheitVal - 32) * 5/ 9;
	return parseFloat(toCelsius.toFixed(1));
};

const convertToFahrenheit = function (celsiusVal) {
	let toFahrenheit = (celsiusVal * 1.8) + 32;
	return parseFloat(toFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
