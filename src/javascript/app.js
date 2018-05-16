
var email;
var password;
var userID;
var lat;
var pickInterestsInit = once(pickInterests);
var userCoords = {};

//-------------------App beginning Story pt. 1----------------------------------------------
// Renders the sign-in modal to the landing page. This remains hidden until the user clicks the 
// Sign in / Sign up button to have the moal render.
signIn();
// Grab the user location coordinates to use throughout the app
getPosition()
  .then(function (coordinates) {
    userCoords.latitude = coordinates.latitude;
    userCoords.longitude = coordinates.longitude;
  })

//------------------- Story pt. 2 -----------------------------------------------------------
// The user either signs up or signs in, and this causes the preferences to render when they 
// click the corresponding button

$(document).on('click', '#login', function (event) {
  event.preventDefault();
  email = $('#email').val();
  password = $('#password').val();
  // rendering happens here
  pickInterestsInit();
  $('.modal-backdrop').remove();
  auth.signInWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Sorry :( That user email and password don't exist, or are incorrect");
  });

});

$(document).on('click', '#signUp', function (event) {
  event.preventDefault();
  email = $('#email').val();
  password = $('#password').val();
  auth.createUserWithEmailAndPassword(email, password);
  // rendering happends here
  pickInterestsInit();
  $('.modal-backdrop').remove();
});



// --------------------------Story pt. 3----------------------------------------------
// The user selects the things they are interested in and they get written to Firebase
$(document).on('click', '.interests', function (e) {
  var interestID = $(this).attr('data-interest-id');
  var interestText = $(this).text();
  saveInterests(interestID, interestText);
  $(this).remove();
})


// --------------------------Story pt. 4----------------------------------------------
// The user clicks on the next button to take them to the page where they can select a desired date for 
// generating their plan, and the plan gets generated
$(document).on('click', '#next-button', function (e) {
  calendar();
  buttonMaker('#profile-li', 'Profile', [{ type: 'button' }, { class: 'btn btn-info' }, { id: 'profile' }])
})



// --------------------------Story pt. 5----------------------------------------------
// If the user doesn't like their generated plan, they can generate a new one by clicking new plan

$(document).on('click', '#new-plan', function () {

  var startDate = $('#new-plan').attr('data-date');
  var preferences = getUserPreferences();

  ajaxCall(startDate, preferences, userCoords)
    .then(function (response) {
      // var planDiv = $('<div class="col-md-8" id="plan-view">');
      var planView = $('#plan-view');
      planView.html('');

      var randomIndex = randomizer(0, (response.events.length - 1));

      var eventName = response.events[randomIndex].name.html;
      var eventDescription = response.events[randomIndex].description.html;
      var eventURL = response.events[randomIndex].vanity_url;
      var startDate = response.events[randomIndex].start.local;
      var categoryID = response.events[randomIndex].category_id;

      planView.append(eventName);
      planView.append(eventDescription);
      planView.append(eventURL);
      planView.append(startDate);
      planView.append(categoryID);
    })
})

// These are listeners for going to profile settings, and from profile settings to the interests-picking 
// page
$(document).on('click', '#profile', function () {
  profileSettings();
})

$(document).on('click', '#go-preferences', function () {
  pickInterests();
})

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS

function saveInterests(interestID, interestText) {

  database.ref(`/${userID}`).update({
    [interestText]: interestID
  });
}
