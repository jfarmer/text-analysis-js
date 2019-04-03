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

  var a = NaN;
  var count = 0;

  for(var i = 0; i < array.length; i++) {
    a = array[i];
    for (var j = 0; j < array.length; j++) {
      if (array[j] === a) {
        count++;
      }
    }
    counts.set(a, count);
    count = 0;
  }
  return counts;
}

module.exports = { itemCounts };
