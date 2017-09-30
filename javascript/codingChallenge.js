class PatternGenerator {
  verify(ret, pattern) {
    if (pattern === "." && ret === "A") {
      return true
    } else if (pattern === "#" && ret === "0") {
      return true
    } else {
      return false
    }
  }

  generate(value, pattern) {
    return pattern.split('').reduce( (acc, curr) => {
      return this.find_values(curr, acc)
    }, '')
  }

  find_values(curr, acc) {
    if (curr === ".") {
      return acc + "A"
    } else if (curr === "#") {
      return acc + "0"
    }
  }

}

module.exports = PatternGenerator;
