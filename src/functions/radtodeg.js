/**
 * Converts radians to degrees for a number. For arrays, the function will be applied index-wise to each element.
 * @param {(number|number[])} a a number or an array of numbers, `a` is expected to be given in radians.
 * @return {(number|number[])} The degrees of `a`. Returns an array with the the degrees of each element if `a` is an array.
 * @example
 * radtodeg(0) // returns 0
 * radtodeg(1.5707963267948966) // returns 90
 * radtodeg([0, 1.5707963267948966, 3.141592653589793, 6.283185307179586]) // returns [0, 90, 180, 360]
 */

export function radtodeg(a) {
  if (Array.isArray(a)) {
    return a.map(a => a * 180 / Math.PI);
  }
  return a * 180 / Math.PI;
}
