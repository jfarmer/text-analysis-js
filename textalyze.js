const fs = require('fs');

/**
 * This is the base code for v0.1 of our JavaScript text analyzer.
 * Visit https://github.com/jfarmer/text-analysis to see what to do.
 *
 * Send a message in Slack if you're stuck or unsure what to do.  These
 * comments are here to help you, but please delete them as you go along.
 */

/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  const counts = new Map();

  // Your code here.
  // Run 'npm test' to see what tests need to pass.

  array.forEach((value) => {
    const sum = counts.get(value) ? counts.get(value) + 1 : 1;
    counts.set(value, sum);
  });

  return counts;
}

/**
 * Takes an arbitrary String as input and returns an Array of all the characters in the string
 * @param {String}
 * @returns {Array}
 */
function stringCharsToArray(string) {
  const arrayString = string.split('');
  return itemCounts(arrayString);
}

/**
 * Takes an arbitrary String as input and returns a "sanitized" string
 * that replaces all upper-case letters with their lower-case equivalent
 * @param {String}
 * @returns {Array}
 */
function sanitize(string) {
  return string.toLowerCase();
}

function readFromFile(file) {
  fs.readFile(file, (err, data) => {
    if (err) throw err;
    return data.toString();
  });
}

/**
 * Given an input Array, returns a Map containing the Basic Frequency Statistics
 * @param {Array}
 * @returns {Map}
 */
function frequencyStatics(array) {
  const counts = itemCounts(array);
  const statistics = new Map();
  let total = 0;

  counts.forEach((value, index) => { total += counts.get(index); });
  counts.forEach((value, index) => {
    const frequency = (100 * value) / total;
    statistics.set(index, frequency);
  });

  return statistics;
}

function histogram(array = []) {
  const statistics = frequencyStatics(array);

  let biggestStringLength = 0;
  statistics.forEach((value, key) => {
    biggestStringLength = key.length > biggestStringLength ? key.length : biggestStringLength;
  });

  statistics.forEach((value, index) => {
    const bar = '='.repeat(value);
    const line = `${index.padEnd(biggestStringLength)} [${value.toFixed(2)}%] ${bar}`;
    console.log(line);
  });
}

module.exports = {
  itemCounts, stringCharsToArray, sanitize, readFromFile, frequencyStatics, histogram,
};
