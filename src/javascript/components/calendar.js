
function calendar() {
  var dateOutput;
  $('#app').html(`
  <div class="row" id="calendar-view">
    <div class="col-md-4">
      <div class="date" id="datepicker"></div>
    </div>
    <div class="col-md-8" id="plan-view">
        Plan displayed Here!!
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
    </div>
    <div class="col-md-6" id="button-view">
    </div>       
`);

  buttonMaker('#button-view','Accept Plan',[{type: 'submit'},{class: 'btn btn-primary'}]);
  buttonMaker('#button-view','New Plan',[{type: 'button'},{class: 'btn btn-primary'}]);

  $('#datepicker').datepicker({
    todayBtn: "linked",
    todayHighlight: true,
    clearBtn: true,
  });


  $('#datepicker').on('changeDate', function (e) {
    console.log(formatDate(e.date));
    dateOutput = formatDate(e.date);
    $('#my_hidden_input').val(
      $('#datepicker').datepicker('getFormattedDate')
    );
  });
  // console.log(dateOutput);
  return dateOutput;
}