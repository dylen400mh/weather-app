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
          (error) => {
            reject(error);
          }
        );
      }
    });
  }

  return { getCoordinates };
})();

export default Location;
