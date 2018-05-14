
function interestButtonHolder() {
  // Create a button div and render it to the app
  var buttonDiv = $('<div id="button-interest-holder">');
  $('#app').html(buttonDiv);

  // Make an array of objects for interests here. Make the keys the interest name and the values as
  // the associated code for that interest.

  var interests = [['food','110']];

  // Iterate the array of interest arrays 
  interests.forEach(function (interestArray) {
    console.log(interestArray);
    buttonMaker('#button-interest-holder',interestArray[0],[{'data-interest-id': interestArray[1] },{class: 'btn btn-warning'}])
  })

}
