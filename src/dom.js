const DOM = (() => {
  const input = document.querySelector("input");
  const locationContainer = document.getElementById("location");
  const weatherImage = document.getElementById("weather-image");
  const temperatureContainer = document.getElementById("temperature");
  const conditionContainer = document.getElementById("condition");
  const feelsLikeContainer = document.getElementById("feels-like");
  const humidityContainer = document.getElementById("humidity");
  const windContainer = document.getElementById("wind");
  const windDirectionContainer = document.getElementById("wind-direction");
  const precipitationContainer = document.getElementById("precipitation");
  const lastUpdatedContainer = document.getElementById("last-updated");
  const formError = document.getElementById("form-error");
  const toggleUnitsButton = document.getElementById("toggle-units");
  const locationError = document.getElementById("location-error");

  function resetInput() {
    input.value = "";
  }

  function toggleFormError(showError, message = "") {
    if (showError) {
      formError.textContent = message;
      formError.style.display = "block";
    } else {
      formError.style.display = "none";
    }
  }

  function toggleLocationError(showError) {
    locationError.style.display = showError ? "block" : "none";
  }

  // resets input field and remove error message
  function clearFields() {
    resetInput();
    toggleFormError(false);
  }

  // toggle units button text should be opposite to what is currently selected
  function setToggleUnitsButtonText(selectedUnit) {
    toggleUnitsButton.textContent =
      selectedUnit === "Metric" ? "Imperial" : "Metric";
  }

  // update display each time weather info is requested
  function updateDisplay(weatherData, unit) {
    // clear existing fields
    clearFields();

    // update toggle units button
    setToggleUnitsButtonText(unit);

    // update info to display
    const { location, current } = weatherData;

    // set weather images
    weatherImage.src = current.condition.icon;

    // set weather image text
    locationContainer.textContent = `${location.name}, ${location.region}, ${location.country}`;
    conditionContainer.textContent = current.condition.text;
    humidityContainer.textContent = `Humidity: ${current.humidity}`;
    windDirectionContainer.textContent = `Wind Direction: ${current.wind_dir}`;
    lastUpdatedContainer.textContent = `Last Updated: ${current.last_updated}`;

    temperatureContainer.textContent =
      unit === "Metric" ? `${current.temp_c} °C` : `${current.temp_f} °F`;

    windContainer.textContent =
      unit === "Metric"
        ? `Wind: ${current.wind_kph} kph`
        : `Wind: ${current.wind_mph} mph`;

    feelsLikeContainer.textContent =
      unit === "Metric"
        ? `Feels Like: ${current.feelslike_c} °C`
        : `Feels Like: ${current.feelslike_f} °F`;

    precipitationContainer.textContent =
      unit === "Metric"
        ? `Precipitation: ${current.precip_mm} mm`
        : `Precipitation: ${current.precip_in} in`;
  }

  return { updateDisplay, resetInput, toggleFormError, toggleLocationError };
})();

export default DOM;
