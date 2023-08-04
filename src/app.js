const App = (() => {
  const form = document.querySelector("form");

  async function fetchData(location) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=fda6ad22a48445cabbe213714230208&q=${location}`,
        { mode: "cors" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }

  async function getWeatherData(location) {
    try {
      const data = await fetchData(location);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }

  function getCurrentWeather(data) {
    return data.current;
  }

  function getLocation(data) {
    return data.location;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = e.target.querySelector("input").value;
    if (location) getWeatherData(location);
  });

  return { getWeatherData };
})();

export default App;
