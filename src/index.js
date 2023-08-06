import App from "./app";
import DOM from "./dom";
import "./style.css";

// set default location on page load
App.getWeatherData("toronto").then((data) => {
  DOM.updateDisplay(data, "Metric");
});
