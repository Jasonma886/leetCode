/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR1 = function (nums) {
  let result = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (result < (nums[i] ^ nums[j])) {
        result = (nums[i] ^ nums[j])
      }
    }
  }
  return result
}

var findMaximumXOR = function(nums) {
  if (nums === null || nums.length <= 1) {
    return 0;
  }
  let max = 0, mask = 0;
  for (let i = 31; i >= 0; i--) {
    mask |= (1 << i);
    let prefixNums = new Set();
    for (let num of nums) {
      prefixNums.add(num & mask);
    }
    let temp = max | (1 << i);
    for (let prefix of prefixNums) {
      if (prefixNums.has(prefix ^ temp)) {
        max = temp;
        break;
      }
    }
  }
  return max;
};
console.time('optimize')
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341]))
console.timeEnd('optimize')

console.time('mine')
console.log(findMaximumXOR1([3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341,3, 10, 5, 25, 2, 8, 4,5,7,8,9,3,4,6,7,8,1,2,4,67,8,789,34,23,12,34,46,67,6,8,67,78,97,123,1235,2345,2341]))
console.timeEnd('mine')
//
// let a= 8
// console.log(a.toString(2));
// let b= 10
// console.log(b.toString(2))
// console.log(8 ^ 7)
// console.log(parseInt(1010, 30));
