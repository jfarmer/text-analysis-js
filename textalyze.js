/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @param {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  let counts = array.reduce((accum, arrVal) => {
    let newCount = accum.has(arrVal) ? accum.get(arrVal) + 1 : 1;
    return accum.set(arrVal, newCount);
  }, new Map());

  return counts;
}

function stringToCharacters(input) {
  return input.toString().split('');
}

function sanitize(input){
  return input.toString().toLowerCase();
}

if (require.main == module) {

  const strTest = 'HEY: ThIs Is hArD tO rEaD!';

}

module.exports = { itemCounts, stringToCharacters, sanitize};
