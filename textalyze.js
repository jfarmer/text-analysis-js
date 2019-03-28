/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @param {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  let counts = array.reduce((accum, arrVal) => {
    var newCount = accum.has(arrVal) ? accum.get(arrVal) + 1 : 1;
    return accum.set(arrVal, newCount);
  }, new Map());

  return counts;
}

function stringToCharacters(input) {
  return (typeof(input) === 'string') ? input.split('') : [];
}

if (require.main == module) {

  let strTest = 'AABBCCC';
  let strArr = stringToCharacters(strTest);

  console.log('The array of string ', strTest, ' is ', strArr);
  console.log('And the counts for ', strArr, ' are: ');

  itemCounts(strArr).forEach(function(value, key) {
    console.log(key, '   ', value);
  });
}

module.exports = { itemCounts, stringToCharacters};
