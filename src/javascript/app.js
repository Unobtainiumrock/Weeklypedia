
// navigator.geolocation.getCurrentPosition(function (position) {

//   // Get the coordinates of the current position.
//   var lat = position.coords.latitude;
//   var lng = position.coords.longitude;
//   console.log(lat);
//   console.log(lng);
//   console.log(typeof lat);

// });
//-------------------App beginning--------------------
signIn();


//--------------------Event Listner for Sign In/Sign Up---------------------------
var email;
var password;
var userID;


$(document).on("click", "#login", function (event) {
  event.preventDefault();
  console.log("test");
  email = $("#email").val();
  console.log(email);
  password = $("#password").val();
  console.log(password);
  var auth = firebase.auth();
  var promise = auth.signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Sorry :(");
    // ...
  });

  var pickInterestsInit = once(pickInterests);

  firebase.auth().onAuthStateChanged(firebaseUser => {

    if (firebaseUser) {

      database.ref(firebaseUser.uid).on("value", function (snapshot) {
        console.log("Snapshot:", snapshot.key);
        console.log("Welcome, " + snapshot.val().email);
        userID = snapshot.key;
        pickInterestsInit();
        $(".modal-backdrop").remove();
      });
    }

  });

});
///-----------------


///////////////Saving user information to database

$("#signUp").click(function (event) {
  event.preventDefault();
  console.log("test1");
  email = $("#email").val();
  console.log("Email:", email);
  var password = $("#password").val();
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email, password);

});
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    database.ref(firebaseUser.uid).set({
      email: firebaseUser.email
    });
  }
});

/////sign out 

firebase.auth().signOut().then(function () {
  // Sign-out successful.
}).catch(function (error) {
  // An error happened.
});
////signin using google

//-----------------------------------------------


$(document).on("click", ".interests", function (e) {
  var interestID = $(this).attr("data-interest-id");
  var interestText = $(this).text();
  saveInterests(interestID, interestText);
  $(this).remove();
})

// {
//   {
//     // $(document).on("click", "#next", function(){
    //   database.ref(`/${userID}`).update({

    //   })
    // })


    function saveInterests(interestID, interestText) {
     
      database.ref(`/${userID}`).update({
       [interestText]: interestID
      });
    }

//Make button holder
// interestButtonHolder();



// console.log(ajaxCall('===========',lat, lng, interestArray));
// console.log("Email from app.js:",email);

// if(true/*User already has preferences*/) {
//   calendar();
//   // calendar calls yourPlan(), which calls
//   $(document).on('click','#new-plan',function(e) {
//     console.log('I was clicked!');
//   })
// }

// calendar();


