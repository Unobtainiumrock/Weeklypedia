
var email;
var password;
var userID;
var lat;
var pickInterestsInit = once(pickInterests);

//-------------------App beginning Story pt. 1----------------------------------------------
// Renders the sign-in modal to the landing page. This remains hidden until the user clicks the 
// Sign in / Sign up button to have the moal render.
signIn();


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
