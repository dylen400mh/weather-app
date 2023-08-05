const Location = (() => {
  function getCoordinates() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Retrieve the latitude and longitude coordinates
            const { latitude, longitude } = position.coords;
            resolve([latitude, longitude]);
          },
          () => {
            // Set resolve parameter to null if unable to get coordinates
            resolve(null);
          }
        );
      } else {
        reject(new Error("Geolocation is not available in this browser."));
      }
    });
  }

  return { getCoordinates };
})();

export default Location;
