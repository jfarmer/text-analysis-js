let result;
/**
 * This is the base code for v0.1 of our JavaScript text analyzer.
 * Visit https://github.com/jfarmer/text-analysis to see what to do.
 *
 * Send a message in Slack if you're stuck or unsure what to do.  These
 * comments are here to help you, but please delete them as you go along.
 */

/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  const counts = new Map();

  // Your code here.
  // Run 'npm test' to see what tests need to pass.

  array.forEach((value) => {
    const sum = counts.get(value) ? counts.get(value) + 1 : 1;
    counts.set(value, sum);
  });

  return counts;
}
const array = ['car', 'house', 'car', 'b', 'c', 'd', 'c'];
result = itemCounts(array);
console.log(result);

/**
 * Takes an arbitrary String as input and returns an Array of all the characters in the string
 * @param {String}
 * @returns {Array}
 */
function stringCharsToArray(string = '') {
  const arrayString = string.split('');
  return itemCounts(arrayString);
}
result = stringCharsToArray('testing it');
console.log(result);

/**
 * Takes an arbitrary String as input and returns a "sanitized" string
 * that replaces all upper-case letters with their lower-case equivalent
 * @param {String}
 * @returns {Array}
 */
function sanitize(string = '') {
  return string.toLowerCase();
}
result = sanitize('HEY: ThIs Is hArD tO rEaD!');
console.log(result);


module.exports = { itemCounts };
