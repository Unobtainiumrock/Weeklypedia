
/**
 * @param  {number} lowerBound: is the lower range for a ranomdly generated number
 * @param  {number} upperBound: is the upper range for a randomly generated number
 */
function randomizer(lowerBound, upperBound) {
  return Math.floor(Math.random() * upperBound + lowerBound);
}
