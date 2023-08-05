import App from "./app";
import DOM from "./dom";
import Location from "./location";

// get coordinates using GeoLocation API and use those coords to set default location on page load
Location.getCoordinates().then((coordinates) => {
  const [latitude, longitude] = [coordinates[0], coordinates[1]];

  App.getWeatherData(`${latitude},${longitude}`).then((data) => {
    DOM.updateDisplay(data, "metric");
  });
});


