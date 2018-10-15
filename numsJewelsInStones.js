/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let j = J.split('')
  let s = S.split('')
  let result = 0
  s.forEach(stone => {
    if (j.includes(stone)) {
      result++
    }
  })
  return result
}

console.log(numJewelsInStones('ab', 'aAAbbbb'))
