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

function getfilePath(){
  let procArgv = process.argv;

  if(procArgv.length <= 2) throw 'the path of the file was not specified!'
  return procArgv.slice(2).toString();
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
  let filePath = getfilePath()

  console.log('The letter count statistics for the file', filePath, 'is: \n');
  letterCountStatistics(filePath);
}

module.exports = { itemCounts, stringToCharacters, sanitize, onlyCharacters};
