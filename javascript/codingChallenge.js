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

  total_available(pattern) {
    if (pattern === "#") {
      return 10
    } else if (pattern === ".") {
      return 26
    }
  }

  generate(value, pattern) {
    let step = value
    const result = pattern.split('').reverse().reduce( (acc, curr) => {
      if (curr === ".") {
        if (step > 26) {
          step = step % 26
          const letter = acc + String.fromCharCode(65 + step)
          return letter
        } else {
          const letter = acc + String.fromCharCode(65 + step)
          step = 0
          return letter
        }
      } else if (curr === "#") {
        if (step > 10) {
          const number = acc + (0 + (step%10))
          step = Math.floor(step/10)
          return number
        } else {
          const number = acc + (0 + step).toString()
          step = 0
          return number
        }
      }
    }, [])
    return result.split('').reverse().join('')
  }
}

module.exports = PatternGenerator;
