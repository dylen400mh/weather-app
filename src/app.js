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
      // reset input field
      DOM.resetInput();

      getWeatherData(location).then((data) => {
        try {
          // hide error message if there is one
          DOM.toggleError(false);

          // update display
          DOM.updateDisplay(data, "metric");
        } catch {
          // display error message
          DOM.toggleError(true, data.error.message);
        }
      });
    }
  });

  return { getWeatherData };
})();

export default App;
