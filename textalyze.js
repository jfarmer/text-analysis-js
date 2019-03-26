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
 * @param {Map} counts - A Map containing the counts of the items in the input array
 */

function itemCounts(array) {
  const counts = new Map();

  array.forEach((item) => {
    if (counts.has(item)) {
      counts.set(item, counts.get(item) + 1);
    } else {
      counts.set(item, 1);
    }
  });

  return counts;
}

module.exports = { itemCounts };

// Result
const items = ['a', 'a', 'a', 'b', 'b', 'c'];
console.log(`The counts for [${items}] are...`); 

itemCounts(items).forEach((value, key) => {
  console.log(`${value}  ${key}`);
})

