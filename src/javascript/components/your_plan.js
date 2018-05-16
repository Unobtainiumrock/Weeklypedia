
function yourPlan(startDate, preferences, coordinates) {

  ajaxCall(startDate, preferences, coordinates)
    .then(function (response) {
      var planDiv = $('<div class="col-md-8" id="plan-view">');

      var randomIndex = randomizer(0, (response.events.length - 1));

      var eventName = response.events[randomIndex].name.html;
      var eventDescription = response.events[randomIndex].description.html;
      var eventURL = response.events[randomIndex].vanity_url;
      var startDate = response.events[randomIndex].start.local;
      var categoryID = response.events[randomIndex].category_id;

      planDiv.append(eventName);
      planDiv.append(eventDescription);
      planDiv.append(eventURL);
      planDiv.append(startDate);
      planDiv.append(categoryID);

      $('#calendar-view').append(planDiv);
      buttonMaker('#calendar-view', 'New Plan', [{ type: 'button' }, { class: 'btn btn-primary' }, { id: 'new-plan' }, { 'data-date': startDate }]);
    })

}

