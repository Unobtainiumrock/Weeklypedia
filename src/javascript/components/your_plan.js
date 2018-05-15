
function yourPlan(startDate,preferences,coordinates) {
  console.log(startDate);
  console.log(preferences);
  console.log(coordinates);
  ajaxCall(startDate,preferences,coordinates)
    .then(function(response) {
      var planDiv = $('<div class="col-md-8" id="plan-view">');

      // Call data
      var eventName = response.events[0].name.text;
      var eventDescription = response.events[0].description.text;
      var eventURL = response.events[0].vanity_url;
      var startDate = response.events[0].start.local;
      var categoryID = response.events[0].category_id;

      planDiv.append(eventName);
      planDiv.append('====================');
      planDiv.append(eventDescription);
      planDiv.append('====================');
      planDiv.append(eventURL);
      planDiv.append('====================');
      planDiv.append(startDate);
      planDiv.append('====================');
      planDiv.append(categoryID);
      planDiv.append('====================');

      $('#calendar-view').append(planDiv);
      buttonMaker('#button-view','Accept Plan',[{type: 'submit'},{class: 'btn btn-primary'}, {id: 'accept-plan'}]);
      buttonMaker('#button-view','New Plan',[{type: 'button'},{class: 'btn btn-primary'},{id: 'new-plan'}]);
    })

}

