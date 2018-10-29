/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  let isPrime = function (num) {
    let end = Math.sqrt(num)
    for (let i = 2; i <= end; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
}

var countPrimes2 = function(n) {
  if (n <= 2) return 0;
  if (n === 3) return 1;

  let nonPrimeNums = new Array(n).fill(false);
  let counter = 0;

  for (let i = 2; i < n; i++) {
    if (nonPrimeNums[i]) continue;
    counter += 1;

    for (let j = 2; j < n; j++) {
      let num = i * j;
      if (num >= n) break;
      nonPrimeNums[num] = true;
    }
  }

  return counter;
};
console.time('countPrimes2')
console.log(countPrimes2(4999999))
console.timeEnd('countPrimes2')


console.time('countPrimes')
console.log(countPrimes(499999))
console.timeEnd('countPrimes')
