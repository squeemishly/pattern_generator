class PatternGenerator {
  verify(pattern) {
    return pattern.split('').reduce( (acc, curr) => {
        if (curr === ".") {
          return acc + "A"
        } else if (curr === "#") {
          return acc + "0"
        }
    }, "")
    // let patterned = ""
    // pattern.split('').forEach( (value) => {
    //   if (value === ".") {
    //     patterned = patterned + "A"
    //   } else if (value === "#") {
    //     patterned = patterned + "0"
    //   }
    // })
    // return patterned
  }
}

module.exports = PatternGenerator;
