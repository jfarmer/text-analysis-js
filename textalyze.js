/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  const counts = new Map();
  var element = "";
  var count = 0;

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

var sanitizedString = sanitize("Olá! Meu nome é Robson.");

var charArray = toChar(sanitizedString);

var charCounts = itemCounts(charArray);

function logMapElements(value, key, map) {
  console.log(`char[${key}] = ${value} ocurrence(s)`);
}

charCounts.forEach(logMapElements);

function sanitize(string) {
	return string.toLowerCase();
}

module.exports = { itemCounts };