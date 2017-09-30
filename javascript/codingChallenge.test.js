const assert = require('chai').assert
const PatternGenerator = require('./codingChallenge')

describe('PatternGenerator', () => {
  before( () => {
    pg = new PatternGenerator
  })

  it('verifys a single letter', () => {
    assert.equal("A", pg.verify("."))
  })

  it('verifys a single number', () => {
    assert.equal("0", pg.verify("#"))
  })

  it('verifys a letter and a number', () => {
    assert.equal("A0", pg.verify(".#"))
  })

  it('verifys many letters and numbers', () => {
    assert.equal("A0A0", pg.verify(".#.#"))
  })

  it('can generate values for a single letter pattern', () => {
    assert.equal("A", pg.generate(0, "."))
  })

  it('can generate values for a single number pattern', () => {
    assert.equal("0", pg.generate(0, "#"))
  })

  it('can generate values for a letter & a number pattern', () => {
    assert.equal("A0", pg.generate(0, ".#"))
  })
})
