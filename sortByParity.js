/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let event = A.filter(a => a % 2 === 0)
  let odd = A.filter(b => b % 2 !== 0)
  return event.concat(odd)
};

console.log(sortArrayByParity([3, 1, 2, 4]))
console.log(sortArrayByParity([4016, 2240, 402, 1600, 2540, 4665, 545, 2756, 3533, 2737, 2701, 4073, 4820, 3016, 2938, 2225, 2982, 1924, 2878, 1451]))
