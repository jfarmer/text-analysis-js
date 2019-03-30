const fs = require('fs');
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

function onlyCharacters(input){
  return input.toString().replace(/[^a-zA-Z]+/g, '');
}

function letterCountStatistics(path){
  fs.readFile(path,'utf8', (err, data) => {
    if (err) throw err;

    let cleanedData = onlyCharacters(sanitize(data));

    let count = itemCounts(stringToCharacters(cleanedData));

    count.forEach(function(value, key) {
      console.log(key, '   ', value);
    });
  }); 
}

if (require.main == module) {
  console.log('The letter count statistics for the file "moby-dick.txt" is: \n');
  letterCountStatistics('./sample_data/moby-dick.txt');
}

module.exports = { itemCounts, stringToCharacters, sanitize, onlyCharacters};
