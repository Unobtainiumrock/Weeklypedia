
/**
 * @param  {Object} coordinates: An object containing latitude and longitude e.g. {latitude: x, longitude: y}
 * @param  {string} startDate:
 * @param  {string} endDate:
 * @param  {string} preferences: is comma separated category ID's
 */
function ajaxCall(startDate, preferences, coordinates) {
  var API_KEY = "AECV6ECEY7DZIFOORUTH";
  var eventBriteURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search";

  eventBriteURL += '?' + $.param({
    'token': API_KEY,
    'location.latitude': coordinates.latitude,
    'location.longitude': coordinates.longitude,
    'categories': preferences,
    'start_date.range_start': startDate,
    //'start_date.range_end':
    'location.within': '10mi'
  })

  return $.ajax({
    url: eventBriteURL,
    method: 'GET'
  })

}   