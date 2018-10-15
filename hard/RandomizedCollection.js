/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.colloection = []
};

RandomizedCollection.__proto__.createNew = function () {
  return new RandomizedCollection()
}

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  let flag = false
  if (this.colloection.includes(val)) {
    flag = true
  }
  this.colloection.push(val)
  return flag
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  let index = this.colloection.indexOf(val)
  if (index < 0) {
    return false
  }
  this.colloection.splice(index, 1)
  return true
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  let len = this.colloection.length
  let random = parseInt(Math.random() * len)
  return this.colloection[random]
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = Object.create(RandomizedCollection).createNew()
// var param_1 = obj.insert(val)
// var param_2 = obj.remove(val)
// var param_3 = obj.getRandom()

console.log(obj);
console.log(obj.insert(1))
console.log(obj.insert(6))
console.log(obj.insert(3))
console.log(obj.remove(3))
console.log(obj.getRandom(1))
console.log(obj.getRandom(1))
console.log(obj.getRandom(3))
console.log(obj.getRandom(1))
console.log(obj.getRandom(1))
console.log(obj.getRandom(3))
console.log(obj.getRandom(1))
console.log(obj.getRandom(1))
console.log(obj.getRandom(3))
