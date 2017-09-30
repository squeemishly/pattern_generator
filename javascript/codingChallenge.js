class PatternGenerator {
  verify(pattern) {
    let patterned = ""
    pattern.split('').forEach( (value) => {
      if (value === ".") {
        patterned = patterned + "A"
      } else if (value === "#") {
        patterned = patterned + "0"
      }
    })
    return patterned
  }
}

module.exports = PatternGenerator;
