const Location = (() => {
  // get user's coordinates
  function getCoordinates() {
    return new Promise((resolve) => {
      // if geolocation api is available
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          // callback success
          (position) => {
            // Retrieve the latitude and longitude coordinates
            const { latitude, longitude } = position.coords;
            resolve([latitude, longitude]);
          },
          // failure
          () => {
            // Set resolve parameter to null if unable to get coordinates
            resolve(null);
          }
        );
      } else {
        resolve(null); // resolve null - we want the program to continue whether or not this API is available
      }
    });
  }

  return { getCoordinates };
})();

export default Location;
