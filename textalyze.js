
/**
 * Given a text, returns an array containing all of its chars.
 * @param {String} text - The string to be get the chars from.
 * @returns {Array} chars - The chars contained in the given text.
 */
function getChars(text) {
  if (typeof text !== 'string') {
    throw new Error('The text parameter must be a string in order for this function to work.')
  }

  return text.split('');
}

/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  return array.reduce(function(map, value) {
    const currentCount = map.has(value) ? map.get(value) : 0;
    map.set(value, currentCount + 1);

    return map;
  }, new Map());
}

/**
 * Given an input Map, get the text to print it to the user.
 * @param {Map} map - The map to be printed to the user.
 * @returns {String} text - The text to be displayed to the user.
 */
function getPrintStatistics(map) {
  let output = '';

  for (let [key, value] of map) {
    output += `${key} \t ${value} \n`;
  }

  return output;
}

if (require.main == module) {
  /**
   * The hard coded string used to illustrate how the statistics would be printed.
   * TODO: Remove this later on.
   */
  let quoteText = 'Great men are not born great, they grow great...';

  console.log(`The analysis of the '${quoteText}' quote are...`);
  console.log(getPrintStatistics(itemCounts(getChars(quoteText))));
}

module.exports = { getChars, itemCounts };
