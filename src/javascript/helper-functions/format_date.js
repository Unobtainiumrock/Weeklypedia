
/**
 * @param  {Object} eventDate: is the date pulled off of the event object for when a calendar date is clicked on
 * 
 */
function formatDate(eventDate) {
//  console.log(eventDate);
  var day = eventDate.getDate();
  var monthIndex = eventDate.getMonth() + 1;
  var year = eventDate.getFullYear();
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  if(minutes < 10) {
    minutes = '0' + minutes;
  }

  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  var currentTime = `T${hours}:${minutes}:${seconds}Z`;
  
  if(monthIndex < 10) {
    monthIndex = '0' + monthIndex;
  }

  if( day < 10) {
    day = '0' + day;
  }

  var date = year + '-' + monthIndex + '-' + day + currentTime;
  return date;
 }
 