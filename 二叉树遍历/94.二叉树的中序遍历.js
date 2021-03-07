/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// var inorderTraversal = function(root) {
//     let res = [];
//     const inorder = (node)=>{
//         if(!node){
//             return;
//         }
//         inorder(node.left);
//         res.push(node.val);
//         inorder(node.right);
//     }
//     inorder(root);
//     return res;
// };

// 2.迭代实现: 栈
var inorderTraversal = function (root) {
    let res = [];
    let stack = [];
    let node = root;
    while (stack.length || node) {
        // 遍历左子树
        // if(node){
        //     stack.push(node);
        //     node = node.left;
        //     continue;
        // }
        while (node) {
            stack.push(node);
            node = node.left;
        }

        node = stack.pop();
        res.push(node.val);
        node = node.right;
    }
    return res;

};


// 1, 先依次遍历左孩子, 在栈中依次记录，当左孩子为空时，遍历到叶子节点
//    跳回上一层节点, 为防止while循环重复进入，将上一层左孩子置为空
// 2, 接着遍历右孩子, 在栈中依次记录值，当右孩子为空时, 遍历到叶子节点
//    跳回上一层节点, 为防止while循环重复进入，将上一层右孩子置为空
const postorderTraversal = function(root) {
    const res = [], stack = []
    while (root || stack.length) {
        if (root.left) {
            stack.push(root)
            root = root.left
        } else if (root.right) {
            stack.push(root)
            root = root.right
        } else {
            res.push(root.val)
            root = stack.pop()
            root && (root.left = null) && (root.right = null)
        }
    }
    return res
};

// @lc code=end