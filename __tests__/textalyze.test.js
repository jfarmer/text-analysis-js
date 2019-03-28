const { itemCounts, stringToCharacters} = require('../textalyze');

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

describe('stringToCharacter', () => {
  test('returns an array of all the characters in the string', () => {
    const input = 'test';
    const expectedOutput = ['t','e','s','t'];

    expect(stringToCharacters(input)).toEqual(expectedOutput);
  });

  test('handles non-string inputs', () => {
    const input = 12345;
    const expectedOutput = [];

    expect(stringToCharacters(input)).toEqual(expectedOutput);
  });

  test('returns an empty array when the string is empty', () => {
    const input = '';
    const expectedOutput = [];

    expect(stringToCharacters(input)).toEqual(expectedOutput);
  });
});
