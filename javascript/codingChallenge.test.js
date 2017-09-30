const assert = require('chai').assert;
const PatternGenerator = require('./codingChallenge');

describe('PatternGenerator', () => {
  it('verifys a single letter', () => {
    pg = new PatternGenerator
    assert.equal("A", pg.verify("."))
  });
});
