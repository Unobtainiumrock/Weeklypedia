
navigator.geolocation.getCurrentPosition(function (position) {

  // Get the coordinates of the current position.
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  console.log(lat);
  console.log(lng);
  console.log(typeof lat);

});

//Make button holder
interestButtonHolder();
var interestString = [];
$(document).on("click", ".interests", function (e) {
  var interestCode = $(this).attr("data-interest-id");
  // interestString += interestCode;
  interestString.push(interestCode);
  // console.log(interestString);
  var interestName = $(this).text();
  // console.log(interestCode);
  database.ref(`/${interestName}`).set({
    interestName: interestCode
  })
  $(this).remove();
})

console.log(ajaxCall('===========',lat, lng, interestString));
// console.log("Email from app.js:",email);
// On sign-up, a user's login info is saved to firebase authentication, afterwards, they are presented the interests-picking view.
// this is also when the sign-in/sign-up buttons need to be cleared out of the nav.

// On sign-in, a user is directed to their plan view.
// createContainer() for housing all the buttons
// createButton() equal to the number of interests to pick from and target the generic container to put them in
// note: we put them all in a container, so that we can have them all simultaneously animate into view to the user.

// if(true/*User already has preferences*/) {
//   calendar();
//   // calendar calls yourPlan(), which calls
//   $(document).on('click','#new-plan',function(e) {
//     console.log('I was clicked!');
//   })
// }


// interestButtonHolder();

