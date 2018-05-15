
function promisedPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function getPosition() {
  return promisedPosition()
    .then(function (position) {
      let userCoordinates = {};
      userCoordinates.latitude = position.coords.latitude;
      userCoordinates.longitude = position.coords.longitude;
      return userCoordinates;
    })
    .catch(function (err) {
      console.error(err.message);
    });
}
