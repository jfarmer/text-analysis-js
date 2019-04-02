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
  var element = "";
  var count = 0;

  // Your code here.
  // Run 'npm test' to see what tests need to pass.
  for(var i = 0; i < array.length; i++) {
  	element = array[i];
  	for(var j = 0; j < array.length; j++) {
  		if(array[j] === element) {
  			count++;
  		}
  	}
  	counts.set(element, count);
  	count = 0;
  }

  return counts;
}

function toChar(string) {
	return string.slice();
}

var charArray = toChar("Olá! Meu nome é Robson.");

var charCounts = itemCounts(charArray);

function logMapElements(value, key, map) {
  console.log(`char[${key}] = ${value} ocurrence(s)`);
}

charCounts.forEach(logMapElements);

module.exports = { itemCounts };
