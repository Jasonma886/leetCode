/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let index = 0, len = nums.length
  for (let i = 0; i < len; i++) {
    index = i
    if (nums[i] > nums[i + 1]) break
  }
  return index
}

console.log(findPeakElement([2, 3, 2, 4, 5,6]))
