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
  const errorMessage = document.getElementById("error");
  const toggleUnitsButton = document.getElementById("toggle-units");

  function resetInput() {
    input.value = "";
  }

  function toggleError(showError, message = "") {
    if (showError) {
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  }

  function clearFields() {
    resetInput();
    toggleError(false);
  }

  // toggle units button text should be opposite to what is currently selected
  function setToggleUnitsButtonText(selectedUnit) {
    toggleUnitsButton.textContent =
      selectedUnit === "Metric" ? "Imperial" : "Metric";
  }

  function updateDisplay(weatherData, unit) {
    // clear existing fields
    clearFields();

    // update toggle units button
    setToggleUnitsButtonText(unit);

    const weather = weatherData.current;
    const { location } = weatherData;

    locationContainer.textContent = `${location.name}, ${location.region}, ${location.country}`;
    conditionContainer.textContent = weather.condition.text;
    humidityContainer.textContent = `Humidity: ${weather.humidity}`;
    windDirectionContainer.textContent = `Wind Direction: ${weather.wind_dir}`;
    lastUpdatedContainer.textContent = `Last Updated: ${weather.last_updated}`;

    temperatureContainer.textContent =
      unit === "Metric" ? `${weather.temp_c} °C` : `${weather.temp_f} °F`;

    windContainer.textContent =
      unit === "Metric"
        ? `Wind: ${weather.wind_kph} kph`
        : `Wind: ${weather.wind_mph} mph`;

    feelsLikeContainer.textContent =
      unit === "Metric"
        ? `Feels Like: ${weather.feelslike_c} °C`
        : `Feels Like: ${weather.feelslike_f} °F`;

    precipitationContainer.textContent =
      unit === "Metric"
        ? `Precipitation: ${weather.precip_mm} mm`
        : `Precipitation: ${weather.precip_in} in`;
  }

  return { updateDisplay, resetInput, toggleError };
})();

export default DOM;