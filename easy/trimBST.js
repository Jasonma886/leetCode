/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST1 = function (root, L, R) {
  let right = root.right, left = root.left, val = root.val
  while (right || left) {
    if (val < L || val > R) {
      if (right) {
        root = right
        right = right.right
      } else if (left) {
        root = left
        left = left.left
      } else{
        root = null
      }
    }
  }
  return root
}

var trimBST = function(root, L, R) {
  if (root === null) {
    return null;
  }
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
};
let root = {
  val: 1,
  right: {
    val: 2,
    right: null,
    left: null
  },
  left: {
    val: 0,
    right: null,
    left: null
  }
}

console.log(trimBST(root, 0, 2))
