import DOM from "./dom";
import Location from "./location";

const App = (() => {
  const form = document.querySelector("form");
  const currentLocationButton = document.getElementById("current-location");

  // gets weather data based on city/province/country or coordinates
  async function getWeatherData(location) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=fda6ad22a48445cabbe213714230208&q=${location}`,
        { mode: "cors" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      DOM.toggleError(true, error.message);
      throw error;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = e.target.querySelector("input").value;
    if (location) {
      getWeatherData(location).then((data) => {
        try {
          // update display
          DOM.updateDisplay(data, "metric");
        } catch {
          // display error message
          DOM.toggleError(true, data.error.message);
        }
      });
    }
  });

  currentLocationButton.addEventListener("click", async () => {
    const [latitude, longitude] = await Location.getCoordinates();

    App.getWeatherData(`${latitude},${longitude}`).then((data) => {
      DOM.updateDisplay(data, "metric");
    });
  });

  return { getWeatherData };
})();

export default App;
