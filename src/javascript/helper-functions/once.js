
/**
 * @param  {Function} fn: is a function provided that you only want to fire once
 * @param  {Object} context: is an optional parameter in which the context of 'this' will point to.
 *                        example: function sum(a,b){return a + b}
 *                                 var sumOnce = once(sum(a,b));
 *                                 sumOnce(a,b) ---> returns a + b
 *                                 sumOnce(a,b) ---> won't return the sum of a + b
 */
function once(fn,context) {
  var result;

  return function() {
    if(!fn) return;

    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  }

}
