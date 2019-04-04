function userInput() {
  return process.argv[2];
}

function readFromFile(string) {
  const fs = require('fs');
  const path = require('path');
  var filePath = path.join(__dirname, 'sample_data', string);
  var content = fs.readFileSync(filePath).toString();
  return content;
}

function sanitize(string) {
  return string.toLowerCase();
}

function toChar(string) {
  return string.slice();
}

/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  const counts = new Map();
  var element = "";
  var count = 0;
  var bar = '=';
  var barSize = 500;

  for(var i = 0; i < array.length; i++) {
    element = array[i];
    for(var j = 0; j < array.length; j++) {
      if(array[j] === element) {
        count++;
      }
    }
    var frequency = (count / array.length);
    var numberOfBars = (frequency * 100) / (100 / barSize);
    var chart = Array(barSize).fill(bar, 0, numberOfBars).join('');
    counts.set(element, (frequency * 100).toFixed(2) + '% ' + chart);
    count = 0;
  }

  return counts;
}

function logMapElements(value, key, map) {
  console.log(`${key} = ${value}`);
}

var fileToString = readFromFile(userInput());

var sanitizedString = sanitize(fileToString);

var charArray = toChar(sanitizedString);

var charCounts = itemCounts(charArray);

charCounts.forEach(logMapElements);

module.exports = { itemCounts };
