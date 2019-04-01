
/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  return array.reduce(function(map, value) {

    if (map.get(value) === undefined) {
      map.set(value, 1);
    } else {
      map.set(value, map.get(value) + 1);
    }

    return map;
  }, new Map());
}

module.exports = { itemCounts };
