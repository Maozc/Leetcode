/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 
 *  后序遍历的最后一个节点一定是根节点
 *  因此:解题方法和105基本类似
 */
var buildTree = function (inorder, postorder) {
    const midInxHash = new Map();
    for (let i = 0; i < inorder.length; i++) {
        midInxHash.set(inorder[i], i);
    }

    const help = (in_start, in_end, p_start, p_end) => {
        if (p_start > p_end) return null;

        const rootVal = postorder[p_end],
            root = new TreeNode(rootVal),
            midInx = midInxHash.get(rootVal),
            leftNum = midInx - in_start;
        root.left = help(in_start, midInx - 1, p_start, p_start + leftNum - 1);
        root.right = help(midInx + 1, in_end, p_start + leftNum, p_end - 1)
        return root;
    }

    return help(0, inorder.length - 1, 0, postorder.length - 1);
};