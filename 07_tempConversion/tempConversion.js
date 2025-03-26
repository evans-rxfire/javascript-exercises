const convertToCelsius = function(temp) {
  const convertedTemp = (5 / 9) * (temp - 32);
  const roundedTemp = parseFloat(convertedTemp.toFixed(1));
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  const convertedTemp = temp * (9 / 5) + 32;
  const roundedTemp = parseFloat(convertedTemp.toFixed(1));
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
