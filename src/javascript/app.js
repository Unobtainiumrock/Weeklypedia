
var email;
var password;
var userID;
var lat;
var pickInterestsInit = once(pickInterests);

//-------------------App beginning----------------------------------------------
// Renders the sign-in modal to the landing page. This remains hidden until the user clicks the 
// Sign in / Sign up button to have the moal render.

  /*Step 1 */signIn();

//--------------------Event Listner for Sign In/Sign Up---------------------------

$(document).on('click', '#login', function (event) {
  event.preventDefault();
  // Grab the email and password and store them on global variables
  email = $('#email').val();
  password = $('#password').val();

  
  // var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(email, password).catch(function (error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Sorry :( That user email and password don't exist, or are incorrect");
});

  auth.onAuthStateChanged(function(firebaseUser) {

    if (firebaseUser) {

      database.ref(firebaseUser.uid).on('value', function (snapshot) {
        // console.log('Snapshot:', snapshot.key);
        // console.log('Welcome, ' + snapshot.val().email);
        userID = snapshot.key;
        pickInterestsInit();
        $('.modal-backdrop').remove();
      });
    }

  });

});

// Firebase listeners Firebase listeners Firebase listeners Firebase listeners Firebase listeners Firebase listeners
auth.onAuthStateChanged(function(firebaseUser) {
  if (firebaseUser) {
    database.ref(firebaseUser.uid).update({
      email: firebaseUser.email
    });
  }
});


// firebase.auth().signOut().then(function () {

// }).catch(function (error) {

// });

// JQuery Listenters JQuery Listenters JQuery Listenters JQuery Listenters JQuery Listenters

$(document).on('click','#signUp',function (event) {
  event.preventDefault();
  console.log('test1');
  email = $('#email').val();
  console.log('Email:', email);
  var password = $('#password').val();
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email, password);

});

$(document).on('click', '.interests', function (e) {
  var interestID = $(this).attr('data-interest-id');
  var interestText = $(this).text();
  saveInterests(interestID, interestText);
  $(this).remove();
})

$(document).on('click', '#next-button', function (e) {
  calendar();
})

$(document).on('click','#profile',function() {
  profileSettings();
})

$(document).on('click','#go-preferences',function() {
  pickInterests();
})

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS

function saveInterests(interestID, interestText) {

  database.ref(`/${userID}`).update({
    [interestText]: interestID
  });
}
