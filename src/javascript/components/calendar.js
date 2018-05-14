
function calendar() {

  $('#app').html(`
  <div class="row" id="calendar-view">
    <div class="col-md-4">
      <div class="date" id="datepicker"></div>
    </div>
    <div class="col-md-7">
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


  $('#datepicker').on('changeDate', function (e) {
    // Create the plan and associated buttons
    yourPlan();
    // grab and format the selected date
    var dateOutput = formatDate(e.date);
    // give the "New Plan" button a data attribute with the formatted date
    $('#new-plan').attr('data-date',dateOutput);
    
    // console.log(dateOutput);

  });

}