const assert = require('chai').assert
const PatternGenerator = require('./codingChallenge')

describe('PatternGenerator', () => {
  before( () => {
    pg = new PatternGenerator
  })

  it('verifys a single letter', () => {
    assert(pg.verify("A", "."))
  })

  it('verifys a single number', () => {
    assert(pg.verify("0", "#"))
  })

  it('refutes a bad pattern', () => {
    assert.isFalse(pg.verify("0", "."))
  })

  it('verifys a letter and a number', () => {
    assert(pg.verify("A0", ".#"))
  })

  it('verifys many letters and numbers', () => {
    assert(pg.verify("A0A0", ".#.#"))
  })

  it('refuts a bad pattern with more than one value', () => {
    assert.isFalse(pg.verify("A0AA", ".#.#"))
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

  it('can generate values for multiple letters & numbers pattern', () => {
    assert.equal("A0A0", pg.generate(0, ".#.#"))
  })

  it('can generate a later value for a single number', () => {
    assert.equal("3", pg.generate(3, "#"))
  })

  it('can generate a later value for a single letter', () => {
    assert.equal("D", pg.generate(3, "."))
  })

  it('can generate a later value for a letter and a number', () => {
    assert.equal("A3", pg.generate(3, ".#"))
  })

  it('can generate a later value for a longer string', () => {
    assert.equal("A0A0A3", pg.generate(3, ".#.#.#"))
  })

  it('can generate a much later value for a string ending in a number', () => {
    assert.equal("A0C7", pg.generate(27, ".#.#"))
  })
})
