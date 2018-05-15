
function pickInterests() {
  // Create a button div and render it to the app
  var buttonDiv = $('<div id="button-interest-holder">');
 
  var nextDiv = $('<div id="next-button">');
  $('#app').html(buttonDiv);
  // Make an array of objects for interests here. Make the keys the interest name and the values as
  // the associated code for that interest.

  var interests = [['Music', '103'], ['Business & Professional', '101'], ['Community & Culture', '113'], ['Performing & Visual Arts', '105'], ['Film, Media & Entertainment', '104'], ['Sports & Fitness', '108'], ['Health & Wellness', '107'], ['Science & Technology', '102'], ['Travel & Outdoor', '109'], ['Charity & Causes', '111'], ['Religion & Spirituality', '114'], ['Family & Education', '115'], ['Seasonal & Holiday', '116'], ['Government & Politics', '112'], ['Fashion & Beauty', '106'], ['Home & Lifestyle', '117'], ['Auto, Boat & Air', '118'], ['Hobbies & Special Interest', '119'], ['School Activities', '120'], ['Other', '199']];

  // Iterate the array of interest arrays 
  interests.forEach(function (interestArray) {
    // console.log(interestArray);
    buttonMaker('#button-interest-holder', interestArray[0], [{ 'data-interest-id': interestArray[1] }, { class: 'btn btn-warning interests' }])
  })
  // $('#button-interest-holder').append(emptyDiv);
  $('#button-interest-holder').append(nextDiv);
  buttonMaker('#next-button', 'Next →',[{type: 'submit'}, {class: 'btn btn-primary'},{id: 'next'}]);
}
