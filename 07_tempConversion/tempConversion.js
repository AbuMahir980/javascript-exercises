const convertToCelsius = function(fahrenheitVal) {
  let toCelsius = (fahrenheitVal - 32) * 5/ 9;
	return parseFloat(toCelsius.toFixed(1));
};
convertToCelsius(32);// toEqual(0)
convertToCelsius(100);// toEqual(37.8)
convertToCelsius(-100);// toEqual(-73.3)

const convertToFahrenheit = function (celsiusVal) {
	let toFahrenheit = (celsiusVal * 1.8) + 32;
	return parseFloat(toFahrenheit.toFixed(1));
};
convertToFahrenheit(0);// toEqual(32)
convertToFahrenheit(73.2);// toEqual(163.8)
convertToFahrenheit(-10);// toEqual(14)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
