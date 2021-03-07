/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 * 若 root 是 p, q的 最近公共祖先 ，则只可能为以下情况之一：
    + p 和 q 在 root的子树中，且分列root的异侧（即分别在左、右子树中）；
    + p = root，且 q 在 root 的左或右子树中；
    + q = root，且 p在 root 的左或右子树中；

 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return null;

    if (root == p || root == q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right)
        return root;
    if (!left)
        return right;
    return left;
};