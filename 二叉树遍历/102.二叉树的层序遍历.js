/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return [];
    }
  let queue = [];  // 辅助队列
  let res = [];
  queue.push(root);
  while (queue.length) {
    const levelCounts = queue.length;
    let levelArr = [];
    for (let i = 0; i < levelCounts; i++) {
      let curNode = queue.shift();
      levelArr.push(curNode.val);
      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
    res.push(levelArr);
  }
  return res;
};
// @lc code=end