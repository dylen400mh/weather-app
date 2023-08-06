import App from "./app";
import DOM from "./dom";
import "./style.css";

App.getWeatherData("toronto").then((data) => {
  DOM.updateDisplay(data, "Metric");
});

