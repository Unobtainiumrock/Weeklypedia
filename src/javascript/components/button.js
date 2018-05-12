

// EXAMPLE BUTTON MAKER. Uncomment this line below to see how it will create a button on the page.
// Don't worry about what arguments are given to this function. We will be pasing the data it needs in 
// app.js
// buttonMaker('#app','Click me!',[{'data-name': 'John'},{'id': 'user'}]);


/**
 * @param  {string} target: is a target on the DOM. e.g. id/class
 * @param  {string} text: is the text content to be placed on the button
 * @param  {Object} attributes: an array of objects containing key/val pairs of attributes: values
 *                            e.g. [{data-name: 'John'},{id: 'user'},{class: 'button'}]
 */
function buttonMaker(target,text, attributes) {
  var button = $('<button>');

  attributes.forEach((attrObj) => {
    for(var key in attrObj) {
     button.attr(`${key}`,`${attrObj[key]}`);
    }
  })

  button.text(text);
  $(target).append(button);
}
