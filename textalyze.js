/**
 * The hard coded array used to illustrate the first iteration.
 */
let arrayToBeCounted = ["a", "a", "a", "b", "b", "c"]

/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  return array.reduce(function(map, value) {
    const currentCount = map.has(value) ? map.get(value) : 0
    map.set(value, currentCount + 1)

    return map;
  }, new Map());
}

/**
 * Given an input Map, get the text to print it to the user.
 * @param {Map} map - The map to be printed to the user.
 * @returns {String} text - The text to be displayed to the user.
 */
function getPrintStatistics(map) {
  let output = ""

  for (let [key, value] of map) {
    output += key + " \t " + value + "\n"
  }

  return output
}

console.log("The counts for " + arrayToBeCounted + " are...")
console.log(getPrintStatistics(itemCounts(arrayToBeCounted)))

module.exports = { itemCounts };
