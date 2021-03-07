/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if(!root) return root;

    let leftTree = invertTree(root.left);
    let rightTree = invertTree(root.right);

    root.left = rightTree;
    root.right = leftTree;

    return root;
}


