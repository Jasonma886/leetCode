/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = [], str = ''
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      str = 'FizzBuzz'
    } else if (i % 3 === 0) {
      str = 'Fizz'
    } else if (i % 5 === 0) {
      str = 'Buzz'
    } else {
      str = i + ''
    }
    result.push(str)
  }
  return result
}

console.log(fizzBuzz(30))
