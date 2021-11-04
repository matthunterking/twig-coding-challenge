/* eslint-env mocha */
const { expect } = require('chai');
const { groupArrayElements } = require('./index.js');

const testCases = [
  { args: [[1], 1], resultArray: [[1]] },
  { args: [[1, 2], 1], resultArray: [[1, 2]] },
  { args: [[1, 2], 2], resultArray: [[1], [2]] },
  { args: [[1, 2, 3], 2], resultArray: [[1, 2], [3]] },
  { args: [[1, 2, 3, 4, 5], 3], resultArray: [[1, 2], [3, 4], [5]] },
  { args: [[1, 2, 3, 4, 5, 6], 3], resultArray: [[1, 2], [3, 4], [5, 6]] },
  { args: [[1, 2, 3, 4, 5, 6], 2], resultArray: [[1, 2, 3], [4, 5, 6]] }
];

const stringifyResult = (resultArray) => resultArray.reduce((string, array, index) => {
  string = string + `[${array}]${index === (resultArray.length - 1) ? '' : ','}`;
  return string;
}, '');

describe('groupArrayElements', () => {
  testCases.forEach(({ args, resultArray }) => {
    it(`should return [${stringifyResult(resultArray)}] when given an array of [${args[0]}] to be divided into ${args[1]} equally sized arrays`, () => {
      expect(groupArrayElements(...args)).to.deep.equal(resultArray);
    });
  });
});
