import DOM from "./dom";

const App = (() => {
  const form = document.querySelector("form");

  async function getWeatherData(location) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=fda6ad22a48445cabbe213714230208&q=${location}`,
        { mode: "cors" }
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = e.target.querySelector("input").value;
    if (location) {
      getWeatherData(location).then((data) => {
        // update display
        DOM.updateDisplay(data, "metric");

        // reset input field
        DOM.resetInput();
      });
    }
  });

  return { getWeatherData };
})();

export default App;
