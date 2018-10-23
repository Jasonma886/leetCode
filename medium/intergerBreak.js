/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) {
    return 1
  } else if (n === 3) {
    return 2
  } else if (n === 4) {
    return 4
  }
  let mod = n % 3, times = ~~(n / 3)
  if (mod === 1) {
    times--
    mod = mod + 3
  } else if (mod === 0) {
    return (Math.pow(3, times))
  }
  return (Math.pow(3, times)) * mod
}

console.log(integerBreak(13));
