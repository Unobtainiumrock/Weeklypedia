
function yourPlan(startDate,preferences,coordinates) {
  console.log(startDate);
  console.log(preferences);
  console.log(coordinates);
  ajaxCall(startDate,preferences,coordinates);
  // var API_KEY = "AECV6ECEY7DZIFOORUTH";
  // var eventBriteURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search";

  // eventBriteURL += '?' + $.param({
  //   'token': API_KEY,
  //   'location.latitude': coordinates.latitude,
  //   'location.longitude': coordinates.longitude,
  //   'categories': preferences,
  //   'start_date.range_start': startDate,
  //   //'start_date.range_end':
  //   'location.within': '10mi'
  // })

    // $.ajax({
      
    // }).then(function() {
        // render plan to page 
          var planDiv = $('<div class="col-md-8" id="plan-view">');
          $('#calendar-view').append(planDiv);
          buttonMaker('#button-view','Accept Plan',[{type: 'submit'},{class: 'btn btn-primary'}, {id: 'accept-plan'}]);
          buttonMaker('#button-view','New Plan',[{type: 'button'},{class: 'btn btn-primary'},{id: 'new-plan'}]);
    // })

}

