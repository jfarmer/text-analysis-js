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
  let counts = new Map();

  array.forEach(item => {

    if (!counts.has(item)) {
      counts.set(item, 0);
    }

    counts.set(item, parseInt(counts.get(item)) + 1);

  });

  // Your code here.
  // Run 'npm test' to see what tests need to pass.

  return counts;
}

let args = "";

args = "aabbccd";
console.log(`The letter count for ${args} is: `);
console.log(itemCounts(args.split('')));

console.log('--------------------------');

args = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque blandit turpis, eu pellentesque dui convallis vitae. Maecenas elit sem, fermentum non pellentesque eu, lacinia eget dui. Fusce accumsan, ex eget facilisis bibendum, est tortor congue tortor, varius aliquam ex magna et metus. Praesent suscipit diam eu diam tincidunt egestas. Quisque maximus purus posuere nisi dapibus, eu ornare diam fermentum. Vestibulum bibendum, mauris condimentum feugiat consectetur, nisl nunc aliquet urna, vel auctor magna diam sed mauris. Morbi faucibus, ex in hendrerit egestas, nulla purus gravida tortor, ac bibendum ligula dolor vel diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris facilisis, dolor posuere mattis ultrices, felis nibh pulvinar metus, at fringilla dolor ante eu augue. Ut auctor lacus ac odio venenatis pretium. Fusce eleifend lorem eu tincidunt pulvinar. Donec eu tellus et justo pharetra bibendum ut id libero. Fusce luctus velit ultricies ante iaculis fringilla.";
console.log(`The letter count for ${args} is: `);
console.log(itemCounts(args.split('')));

module.exports = { itemCounts };
