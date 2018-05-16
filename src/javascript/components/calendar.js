
function calendar() {
  $('#app').html(`
  <div class="row" id="calendar-view">
    <div class="col-md-4">
      <div class="date" id="datepicker"></div>
    </div>

  </div>
  <div class="row">
    <div class="col-md-4" id="button-view">
    <div class="col-md-4>
    </div>
    <div class="col-md-6">
    </div>
  </div>     
`);


  // Add some date-picker-specific attriutes to the date picker element
  $('#datepicker').datepicker({
    todayBtn: "linked",
    todayHighlight: true,
    clearBtn: true,
  });

  // We only want the initial plan render to happen once 
  var yourPlanInit = once(yourPlan);

  $('#datepicker').on('changeDate', function (e) {
    var dateOutput = formatDate(e.date);
    var preferences = getUserPreferences();
    console.log(userCoords.latitude, userCoords.longitude);

    yourPlanInit(dateOutput, preferences, userCoords);
    // Call weather API and add response data to Nav
    weatherCall(userCoords)
      .then(function (weatherData) {
        var lowOf = weatherData.main.temp_min;
        var highOf = weatherData.main.temp_max;
        $('#weather').html(
          `${weatherData.name} High: ${highOf}˚F Low: ${lowOf}˚F`
        );
      })

    // Constantly updates the 'new plan' button's data attribute with the date selected on the
    // calendar. We did this, so that you can randomly generate a new plan, by clicking the new 
    // plan button, which will use its own data attribute in a new Eventbrite API call.
    $('#new-plan').attr('data-date', dateOutput);
  });

}
