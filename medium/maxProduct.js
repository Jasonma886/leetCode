/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let first = nums[0]
  let max = first, min = first
  nums.forEach((item, idx) => {
    if (idx === 0) {
      return
    }
    if (item < 0) {
      [max, min] = [min, max]
    }
    max = Math.max(item, item * max)
    min = Math.min(item, item * min)
    first = Math.max(first, max)
  })
  return first
}

console.log(maxProduct([3, 4, -1, 5, 67]));
