const DOM = (() => {
  const input = document.querySelector("input");
  const locationContainer = document.getElementById("location");
  const temperatureContainer = document.getElementById("temperature");
  const conditionContainer = document.getElementById("condition");
  const feelsLikeContainer = document.getElementById("feels-like");
  const humidityContainer = document.getElementById("humidity");
  const windContainer = document.getElementById("wind");
  const windDirectionContainer = document.getElementById("wind-direction");
  const precipitationContainer = document.getElementById("precipitation");
  const lastUpdatedContainer = document.getElementById("last-updated");

  function resetInput() {
    input.value = "";
  }

  function updateDisplay(weatherData, unit) {
    const weather = weatherData.current;
    const { location } = weatherData;

    console.log(locationContainer);

    console.log(`${location.name}, ${location.region}, ${location.country}`);

    locationContainer.textContent = `${location.name}, ${location.region}, ${location.country}`;
    conditionContainer.textContent = weather.condition.text;
    humidityContainer.textContent = `Humidity: ${weather.humidity}`;
    windDirectionContainer.textContent = `Wind Direction: ${weather.wind_dir}`;
    lastUpdatedContainer.textContent = `Last Updated: ${weather.last_updated}`;

    if (unit === "metric") {
      temperatureContainer.textContent = `${weather.temp_c} °C`;
      windContainer.textContent = `Wind: ${weather.wind_kph} kph`;
      feelsLikeContainer.textContent = `Feels Like: ${weather.feelslike_c} °C`;
      precipitationContainer.textContent = `Precipitation: ${weather.precip_mm} mm`;
    }

    if (unit === "imperial") {
      temperatureContainer.textContent = `${weather.temp_f} °F`;
      windContainer.textContent = `Wind: ${weather.wind_mph} mph`;
      feelsLikeContainer.textContent = `Feels Like: ${weather.feelslike_f} °F`;
      precipitationContainer.textContent = `Precipitation: ${weather.precip_in} in`;
    }
  }

  return { resetInput, updateDisplay };
})();

export default DOM;
