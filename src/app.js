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

  currentLocationButton.addEventListener("click", async () => {
    const [latitude, longitude] = await Location.getCoordinates();

    App.getWeatherData(`${latitude},${longitude}`).then((data) => {
      DOM.updateDisplay(data, units);
    });
  });

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
