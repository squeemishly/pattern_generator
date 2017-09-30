class PatternGenerator {
  verify(pattern) {
    return pattern.split('').reduce( (acc, curr) => {
      return this.test_values(curr, acc)
    }, '')
  }

  test_values(curr, acc) {
    if (curr === ".") {
      return acc + "A"
    } else if (curr === "#") {
      return acc + "0"
    }
  }

  generate(seq, pattern) {
    if (pattern === ".") {
      return "A"
    } else if (pattern === "#") {
      return "0"
    }
  }
}

module.exports = PatternGenerator;
