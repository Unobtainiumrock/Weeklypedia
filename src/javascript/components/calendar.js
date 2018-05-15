
function calendar() {
  $('#app').html(`
  <div class="row" id="calendar-view">
    <div class="col-md-4">
      <div class="date" id="datepicker"></div>
    </div>

  </div>
  <div class="row">
    <div class="col-md-4">
    </div>
    <div class="col-md-6" id="button-view">
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
    
    getPosition()
      .then(function(coordinates) {
        yourPlanInit(dateOutput,preferences,coordinates);
      })
    // Create the plan and associated buttons
    // yourPlanInit(dateOutput,preferences,latitude,longitude);
    // grab and format the selected date
    // give the "New Plan" button a data attribute with the formatted date
    $('#new-plan').attr('data-date',dateOutput);
    
  });

}

