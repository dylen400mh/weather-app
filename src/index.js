import App from "./app";
import DOM from "./dom";
import Location from "./location";
import "./style.css";

// get coordinates using GeoLocation API and use those coords to set default location on page load (units will be metric on default)
Location.getCoordinates().then((coordinates) => {
  // if coordinates were found, search with them, otherwise, search for a 'default' location
  if (coordinates) {
    const [latitude, longitude] = [coordinates[0], coordinates[1]];

    App.getWeatherData(`${latitude},${longitude}`).then((data) => {
      DOM.updateDisplay(data, "Metric");
    });
  } else {
    App.getWeatherData("toronto").then((data) => {
      DOM.updateDisplay(data, "Metric");
    });
  }
});
