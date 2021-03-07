/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 // 1. 递归写法
// var preorderTraversal = function(root) {
//     let res = [];
//     const preorder = (node)=>{
//         if(!node) return;
//         res.push(node.val);
//         preorder(node.left);
//         preorder(node.right);
//     }
//     preorder(root);
//     return res;
// };

// 2. 迭代写法：栈
var preorderTraversal = function(root) {
    let res = [];
    let stack = [];
    if (root) {
        stack.push(root);
    }
    while (stack.length > 0) {
        const curNode = stack.pop();
        res.push(curNode.val);

        // 先将右子树压入栈中
        if(curNode.right !== null){
            stack.push(curNode.right);
        }
        // 将左子树压入栈中
        if(curNode.left !== null){
            stack.push(curNode.left);
        }
    }
    return res;
};
// @lc code=end