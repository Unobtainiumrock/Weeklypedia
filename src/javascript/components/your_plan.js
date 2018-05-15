
function yourPlan(date,preferences,coordinates) {
  console.log(date);
  console.log(preferences);
  console.log(coordinates);
  // lat, long  }
    /*render our plan for the day*/
    // $.ajax({
  
    // }).then(function() {
        // render plan to page 
          var planDiv = $('<div class="col-md-8" id="plan-view">');
          $('#calendar-view').append(planDiv);
          buttonMaker('#button-view','Accept Plan',[{type: 'submit'},{class: 'btn btn-primary'}, {id: 'accept-plan'}]);
          buttonMaker('#button-view','New Plan',[{type: 'button'},{class: 'btn btn-primary'},{id: 'new-plan'}]);
    // })

}

