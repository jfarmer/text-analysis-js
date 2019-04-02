const { getChars, itemCounts } = require('../textalyze');

describe('itemCount', () => {
  test('returns a count of the strings in the array', () => {
    const input = ['one', 'two', 'three', 'one', 'two', 'ZZZZ'];
    const expectedOutput = new Map([['one', 2], ['two', 2], ['three', 1], ['ZZZZ', 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('returns an empty hash when array is empty', () => {
    const input = [];
    const expectedOutput = new Map();

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('counts multiple words', () => {
    const input = ['hi', 'hi', 'hi'];
    const expectedOutput = new Map([['hi', 3]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('handles non-string inputs', () => {
    const input = ['null', null, '10', 10];
    const expectedOutput = new Map([['null', 1], [null, 1], ['10', 1], [10, 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('is case-sensitive', () => {
    const input = ['a', 'A', 'a', 'A'];
    const expectedOutput = new Map([['a', 2], ['A', 2]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });
});

describe('getChars', () => {
  test('returns an empty array of chars if an empty text is passed', () => {
    expect(getChars('')).toEqual([]);
  });

  test('returns the chars passed in the array', () => {
    const input = 'Testing input';
    const expectedOutput = ['T', 'e', 's', 't', 'i', 'n', 'g', ' ', 'i', 'n', 'p', 'u', 't'];

    expect(getChars(input)).toEqual(expectedOutput)
  });

  test('throws an error when the passed text isn\'t a string', () => {
    expect(getChars).toThrow(new Error('The text parameter must be a string in order for this function to work.'));
  });
});
