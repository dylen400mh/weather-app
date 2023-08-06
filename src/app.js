import DOM from "./dom";
import Location from "./location";

const App = (() => {
  const form = document.querySelector("form");
  const currentLocationButton = document.getElementById("current-location");
  const toggleUnitsButton = document.getElementById("toggle-units");
  const temperatureContainer = document.getElementById("temperature");
  const location = document.getElementById("location");

  // units are set as metric by default
  let units = "Metric";

  // toggle units
  function toggleUnits() {
    units = units === "Metric" ? "Imperial" : "Metric";
  }

  // gets weather data based on city/province/country or coordinates
  // eslint-disable-next-line no-shadow
  async function getWeatherData(location) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=fda6ad22a48445cabbe213714230208&q=${location}`,
        { mode: "cors" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      DOM.toggleFormError(true, error.message);
      throw error;
    }
  }

  // form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input").value;
    if (input) {
      getWeatherData(input).then((data) => {
        try {
          // update display
          DOM.updateDisplay(data, units);
        } catch {
          // display error message
          DOM.toggleFormError(true, data.error.message);
        }
      });
    }
  });

  // current location event
  currentLocationButton.addEventListener("click", async () => {
    // get coordinates using GeoLocation API and use those coords to set default location on page load (units will be metric on default)
    const coordinates = await Location.getCoordinates();

    // if coordinates were found, search with them, otherwise, disable button
    if (coordinates) {
      const [latitude, longitude] = [coordinates[0], coordinates[1]];

      App.getWeatherData(`${latitude},${longitude}`).then((data) => {
        DOM.updateDisplay(data, "Metric");
      });
    } else {
      // disable location button and display location error
      currentLocationButton.disabled = true;
      DOM.toggleLocationError(true);

      // set a default location
      App.getWeatherData("toronto").then((data) => {
        DOM.updateDisplay(data, "Metric");
      });
    }
  });

  // disables current location button if location is off (will be done on page load)
  window.addEventListener("load", async () => {
    // get coordinates using GeoLocation API and use those coords to set default location on page load (units will be metric on default)
    const coordinates = await Location.getCoordinates();

    // if coordinates were found, search with them, otherwise, disable button
    if (coordinates) {
      const [latitude, longitude] = [coordinates[0], coordinates[1]];

      App.getWeatherData(`${latitude},${longitude}`).then((data) => {
        DOM.updateDisplay(data, "Metric");
      });
    } else {
      // disable location button and display location error
      currentLocationButton.disabled = true;
      DOM.toggleLocationError(true);

      App.getWeatherData("toronto").then((data) => {
        DOM.updateDisplay(data, "Metric");
      });
    }
  });

  // events to toggle units
  temperatureContainer.addEventListener("click", () => {
    toggleUnits();
    App.getWeatherData(location.textContent).then((data) => {
      DOM.updateDisplay(data, units);
    });
  });

  toggleUnitsButton.addEventListener("click", () => {
    toggleUnits();
    App.getWeatherData(location.textContent).then((data) => {
      DOM.updateDisplay(data, units);
    });
  });

  return { getWeatherData };
})();

export default App;
