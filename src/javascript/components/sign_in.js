
// Modularize this more, so that we can provide other html attributes as parameters
//  (for merging the sign-in/sign-up modals into a single modal generating function)
function signIn() {
  $('#app').html(`<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Sign In / Sign Up
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Sign In / Sign Up</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>


          <div class="modal-body">
              <form>
                  <!-- Input box for Email -->
                  <div class="form-group">
                      <label for="inputEmail"></label>
                      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                      <small id="emailHelp" class="form-text text-muted"></small>
                  </div>
                  <!-- Input box for Password -->
                  <div class="form-group">
                      <label for="inputPassword"></label>
                      <input type="password" class="form-control" id="password" placeholder="Password">
                  </div>
                  <div id="signInButtons">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" id="signUp">Sign Up</button>
                  <button type="button" class="btn btn-primary id="login">Sign In</button>
                  <button type="button" class="btn btn-secondary" id="googleBtn">Sign In using google</button>
                  <button type="button" class="btn btn-secondary" id="googleSignOutBtn">Sign Out using Google</button>
                  <button type="button" class="btn btn-secondary" onclick="facebookSignin()">Sign in with Facebook</button>
                  <button type="button" class="btn btn-secondary" onclick="facebookSignout()">Facebook Signout</button>
                  </div>
              </form>
          </div>

          <!-- google sign in -->
          <div class="g-signin2" data-onsuccess="onSignIn">
              <a href="src/others/googlebutton.png"></a>
          </div>
          <!-- Facebook sign in -->
          <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false"
              data-auto-logout-link="false" data-use-continue-as="false"></div>
          <!-- Modal footer containing cancel and submit buttons -->
          <div class="modal-footer">
             
          </div>
      </div>
  </div>
</div>`);

// var config = {
//     apiKey: "AIzaSyDWm9TMytWfvjceTHk3IyY1cPuYR5L_TyQ",
//     authDomain: "fir-b05cd.firebaseapp.com",
//     databaseURL: "https://fir-b05cd.firebaseio.com",
//     projectId: "fir-b05cd",
//     storageBucket: "fir-b05cd.appspot.com",
//     messagingSenderId: "203265362711"
// };
// firebase.initializeApp(config);
// var database = firebase.database();
var email;
$("#login").click(function (event) {
    event.preventDefault();
    email = $("#email").val();
    console.log(email);
    database.ref().push({
       email: email

    });
    ////////////////////////////////////
    //get firebase user
    // var user = FirebaseAuth.getInstance().getCurrentUser();
    // console.log("User:",user);

    // //get reference
    // var ref = FirebaseDatabase.getInstance().getReference(USERS_TABLE);

    // //build child
    // ref.child(user.getUid()).setValue(user_class);
    // ////////////////////////////////////
    // database.ref().push({
    //     email: email

    // });
    // database.ref().on("child_added", function (childSnapshot) {

    //     var newEmail = childSnapshot.val().email;
    //     console.log("newEmail:",newEmail);
    // }, function (errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
    // });
    /////////////////////////////////
    var password = $("#password").val();
    var auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password)
        .then(function (data) {
            console.log(data);
        })
    // console.log(promise);
});

$("#signUp").click(function (event) {
    event.preventDefault();
    email = $("#email").val();
    console.log("Email:",email);
    var password = $("#password").val();
    var auth = firebase.auth();
    var promise = auth.createUserWithEmailAndPassword(email, password);

});

///////////////Saving user information to database

$("#signInButtons").on("click", function(){
    database.ref().set({
        user:email
    });
});

database.ref().on("value",function(snapshot){
    email = snapshot.val().user;
},function(errorObject){
    console.log("read failed: "+errorObject.code);
});

////signin using google
$("#googleBtn").click(function (event) {
    event.preventDefault();
    console.log("google called");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()

        .signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;

            console.log(`Token: ${token}`);
            console.log(`User: ${user}`);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error.code)
            console.log(error.message)
        });
});
////signout using google
$("#googleSignOutBtn").click(function (event) {
    event.preventDefault();

    firebase.auth().signOut()

        .then(function () {
            console.log('Signout Succesfull')
        }, function (error) {
            console.log('Signout Failed')
        });
});
//////login with facebook
// window.fbAsyncInit = function () {
//     FB.init({
//         appId: '366345103857149',
//         xfbml: true,
//         version: 'v2.6'
//     });
// };

// (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) { return; }
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// var provider1 = new firebase.auth.FacebookAuthProvider();

// function facebookSignin() {
//     event.preventDefault();
//     firebase.auth().signInWithPopup(provider1)

//         .then(function (result) {
//             var token = result.credential.accessToken;
//             var user = result.user;

//             console.log(token)
//             console.log(user)
//         }).catch(function (error) {
//             console.log(error.code);
//             console.log(error.message);
//         });
// }

// function facebookSignout() {
//     event.preventDefault();
//     firebase.auth().signOut()

//         .then(function () {
//             console.log('Signout successful!')
//         }, function (error) {
//             console.log('Signout failed')
//         });
// }

  
}
