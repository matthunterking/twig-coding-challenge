/* eslint-env mocha */
const { expect } = require('chai');
const { groupArrayElements } = require('./index.js');

describe('test', () => {
  it('should test correctly', () => {
    expect(groupArrayElements()).to.equal(true);
  });
});
