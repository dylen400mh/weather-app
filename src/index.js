import App from "./app";
import DOM from "./dom";

App.getWeatherData("st. thomas ontario").then((data) => {
  // update display
  DOM.updateDisplay(data, "metric");
});

