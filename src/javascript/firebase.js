
var config = {
  apiKey: "AIzaSyA4JOJoxu7FZFEbcBooN0CKxCtgNnoWbYo",
  authDomain: "weeklypedia-dc07e.firebaseapp.com",
  databaseURL: "https://weeklypedia-dc07e.firebaseio.com",
  projectId: "weeklypedia-dc07e",
  storageBucket: "",
  messagingSenderId: "443563459251"
};
firebase.initializeApp(config);

var database = firebase.database();
var auth = firebase.auth();

// This is used to link the 'auth changes' to creating changes to firebase.
// In other words, when a user is creating an account, or loggin in, we change our global
// userID variable in app.js. Thats how the user is tracked. We use this ID for referring to preferences
// saved for API calls, or for when new preferences are added.
auth.onAuthStateChanged(function (firebaseUser) {

  if (firebaseUser) {

    database.ref(firebaseUser.uid).on('value', function (snapshot) {
      userID = snapshot.key;
    });

    database.ref(firebaseUser.uid).update({
      email: firebaseUser.email
    });
  }

});
