class PatternGenerator {
  verify(ret, pattern) {
    const returns = ret.split('')
    const patterns = pattern.split('')
    const comparedValues = returns.map( (val, idx) => {
      return [val, patterns[idx]]
    })
    let correct = true
    comparedValues.forEach( arr => {
      if ((arr[0] === "A" && arr[1] !== ".") || (arr[0] === "0" && arr[1] !== "#")) {
        correct = false
      }
    })
    return correct
  }

  generate(value, pattern) {
    let step = value
    return pattern.split('').reduce( (acc, curr) => {
      if (curr === ".") {
        return acc + String.fromCharCode(65 + step)
      } else if (curr === "#") {
        return acc + (0 + step).toString()
      }
      // return this.find_values(curr, acc)
    }, '')
  }

  // find_values(curr, acc) {
  //   if (curr === ".") {
  //     return acc + "A"
  //   } else if (curr === "#") {
  //     return acc + "0"
  //   }
  // }

}

module.exports = PatternGenerator;
