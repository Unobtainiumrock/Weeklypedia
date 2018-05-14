
/**
 * @param  {number} lat
 * @param  {number} lng
 * @param  {Object} preferences: is an array of preference codes needed for
 *                               Eventbrite API call
 */

function ajaxCall(lat, lng,preferences) {
    // var API_KEY = "AECV6ECEY7DZIFOORUTH";
    // // var openWeather_API = "890d62cddb32e1e905cdc13b80f40520";
    // var preferences = '105';
    // //note how our query url is prepended with a cors anywhere thing
    // //This is required to avoid a CORS error.
    // var eventBriteURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search";


    // // Use JQuery's param method for serializing an object to something suitable for an ajax query string
    // // Get all non-food events!
    // eventBriteURL += '?' + $.param({
    //     'token': API_KEY,
    //     'location.latitude': lat,
    //     'location.longitude': lng,
    //     'categories': preferences,
    //     //   'start_date.range_start':
    //     //   'start_date.range_end':
    //     'location.within': '5mi'
    // })
    // // https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?token=AECV6ECEY7DZIFOORUTH&location.latitude=37.7745239&location.longitude=-122.4671819&categories=101%2C110%2C105&location.within=20mi
    // $.ajax({
    //     eventBriteURL,
    //     method: 'GET'
    // }).then(function (response) {
    //     console.log(response);
    //     for (var i = 0; i < 10; i++) {
    //         var eventName = response.events[i].name.text;
    //         console.log("eventName:", eventName);
    //         var eventDescription = response.events[i].description.text;
    //         console.log("Description:", eventDescription);
    //         var eventURL = response.events[i].vanity_url;
    //         console.log("URL:", eventURL);
    //         var startDate = response.events[i].start.local;
    //         console.log("start date:", startDate);
    //         var endDate = response.events[i].end.local;
    //         console.log("end date:", endDate);
    //         var categoryID = response.events[i].category_id;
    //         console.log("category ID:", categoryID);
    //     }

    // })


    console.log(preferences);
   return {
       lat,
       lng,
       preferences
   }
}   