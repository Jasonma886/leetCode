/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let temp = JSON.parse(JSON.stringify(nums))
  let isEnd = false, result = [], times = 0
  nums.some((item, index) => {
    let x = temp.shift()
    times = index
    temp.some((y, indexY) => {
      times++
      if (x + y === target) {
        isEnd = true
        result = [index, times]
        return isEnd
      }
    })
    return isEnd
  })
  return result
}

console.log(twoSum([3,3], 6))
