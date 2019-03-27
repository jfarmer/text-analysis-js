/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @param {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  let counts = new Map();

  array.forEach(element => {
    
    if (!counts.has(element))
      counts.set(element, 1);
    else 
      counts.set(element, counts.get(element) + 1);
  });

  return counts;
}

module.exports = { itemCounts };

//
// Running...
//

var array = ['a', 'a', 'a', 'b', 'b', 'c'];

console.log("The counts for ", array, " are...");

itemCounts(array).forEach(function(value, key) {
  console.log(key, '   ', value);
});