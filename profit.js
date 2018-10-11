/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let temp = JSON.parse(JSON.stringify(prices))
  let profit = 0
  prices.forEach(item => {
    let buy = temp.shift()
    temp.forEach(sell => {
      if (sell - buy >= profit) {
        profit = sell - buy
      }
    })
  })
  return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6]))
