
function signIn() {

  // 
  var signInModal = $('<div>');
  signInModal.addClass('row-fluid');
  signInModal.attr('id','sign-in-modal');

  // Make sure that the variable we store our elements in matches the class name for
  // bootstrap naming conventions
  var buttonPrimary = $('<button>');
  button.addClass('btn btn-primary');
  button.attr('data-toggle','modal');
  button.attr('data-target','exampleModal');
  button.text('Sign In');
  signInModal.append(buttonPrimary);

  // Make sure that the variable we store our elements in matches the class name for
  // bootstrap naming conventions
  var modalFade = $('<div>');
  modalDiv.addClass('modal fade');
  modalDiv.attr('id','exampleModal');
  modalDiv.attr('tabindex','-1');
  modalDiv.attr('role','dialogue');
  modalDiv.attr('aria-labelledby','exampleModalLabel');
  modalDiv.attr('aria-hidden','true');

  // var modalDialogue = 

  $('#app').html(signInModal);
}
