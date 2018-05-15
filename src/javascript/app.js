
var email;
var password;
var userID;
var lat;
var pickInterestsInit = once(pickInterests);

//-------------------App beginning----------------------------------------------
signIn();

// Display the weather to the user
getPosition()
  .then(function(coordinates) {
    weatherCall(coordinates)
      .then(function(weatherData) {
        console.log(weatherData);
      })
  })

//--------------------Event Listner for Sign In/Sign Up---------------------------

$(document).on('click', '#login', function (event) {
  event.preventDefault();
  email = $('#email').val();
  password = $('#password').val();

  var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('Sorry :(');
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {

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
///-----------------

// Firebase listeners Firebase listeners Firebase listeners Firebase listeners Firebase listeners Firebase listeners
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    database.ref(firebaseUser.uid).set({
      email: firebaseUser.email
    });
  }
});


firebase.auth().signOut().then(function () {

}).catch(function (error) {

});

// JQuery Listenters JQuery Listenters JQuery Listenters JQuery Listenters JQuery Listenters

$('#signUp').click(function (event) {
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

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS

function saveInterests(interestID, interestText) {

  database.ref(`/${userID}`).update({
    [interestText]: interestID
  });
}


// var getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
