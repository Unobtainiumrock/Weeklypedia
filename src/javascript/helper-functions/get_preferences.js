
function getUserPreferences() {

  var urlRef = database.ref().child(`/${userID}`);
  var result = [];

  urlRef.once("value", function (snapshot) {

    snapshot.forEach(function(child) {
      result.push(child.val());
    })
  });

  return result.slice(0,result.length -1).join(',');
} 
