/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// 1.递归写法
// var postorderTraversal = function (root) {
//     let res = [];
//     const postorder = (node) => {
//         if (!node) return;
//         postorder(node.left);
//         postorder(node.right);
//         res.push(node.val);
//     }
//     postorder(root);
//     return res;
// };
// // @lc code=end

// 2.迭代实现: 栈
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