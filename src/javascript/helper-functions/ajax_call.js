
/**
 * @param  {Object} coordinates: An object containing latitude and longitude e.g. {latitude: x, longitude: y}
 * @param  {string} startDate:
 * @param  {string} endDate:
 * @param  {string} preferences: is comma separated category ID's
 */

function ajaxCall(startDate, preferences, coordinates) {
  var API_KEY = "AECV6ECEY7DZIFOORUTH";
  var eventBriteURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search";


  // Use JQuery's param method for serializing an object to something suitable for an ajax query string
  // Get all non-food events!
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
  })/*.then(function (response) {
    console.log(response);
    for (var i = 0; i < 10; i++) {
      var eventName = response.events[i].name.text;
      console.log("eventName:", eventName);
      var eventDescription = response.events[i].description.text;
      console.log("Description:", eventDescription);
      var eventURL = response.events[i].vanity_url;
      console.log("URL:", eventURL);
      var startDate = response.events[i].start.local;
      console.log("start date:", startDate);
      // var endDate = response.events[i].end.local;
      // console.log("end date:", endDate);
      var categoryID = response.events[i].category_id;
      console.log("category ID:", categoryID);
    }

  })*/

}   