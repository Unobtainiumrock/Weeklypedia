
/**
 * @param  {Object} coordinates: An object containing latitude and longitude e.g. {latitude: x, longitude: y}
 * @param  {string} startDate:
 * @param  {string} endDate:
 * @param  {string} preferences: is comma separated category ID's
 */
function weatherCall(coordinates) {
  var openWeather_API = "3059d78de2328524fb8d73d25171deab";
  var openWeatherURL = "https://api.openweathermap.org/data/2.5/weather";

  openWeatherURL += '?' + $.param({
    'lat': coordinates.latitude,
    'lon': coordinates.longitude,
    'APPID':openWeather_API,
    'units': 'imperial'
})
  console.log(openWeatherURL);
  return $.ajax({
    url: openWeatherURL,
    method: 'GET'
  })

}   



   //note how our query url is prepended with a cors anywhere thing
   //This is required to avoid a CORS error.


