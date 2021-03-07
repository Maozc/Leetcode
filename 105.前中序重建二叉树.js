/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {number[]} preorder
 * @param {number[]} inorder 中序
 * @return {TreeNode}
 * 
 * [3,9,20,null,null,15,7]
 *   3        
 *  / \
 *  9 20
 *    / \
 *   15  7
 * 
 *  preorder 数组的第一项是根节点
 *  由根节点，在 inorder中划分出左、右子树的 inorder 序列,确定左右子树的节点个数
 *  根据左右子树的节点个数在 preorder 中确定左、右子树的 preorder 序列。
 */
var buildTree = function (preorder, inorder) {
    // if(inorder.length === 0 ) return null;
    // const root = new TreeNode(preorder[0]),
    //       midInx = inorder.indexOf(preorder[0]);
    // root.left = buildTree(preorder.slice(1, midInx+1),inorder.slice(0,midInx));
    // root.right = buildTree(preorder.slice(midInx+1),inorder.slice(midInx+1));
    // return root;

    const midInxHash = new Map();
    for (let i = 0; i < inorder.length; i++) {
        midInxHash.set(inorder[i], i);
    }
    const helper = (p_start, p_end, in_start, in_end) => {
        if (p_start > p_end) return null;

        let rootVal = preorder[p_start],
            root = new TreeNode(rootVal),
            midInx = midInxHash.get(rootVal),
            leftNum = midInx - in_start;

        root.left = helper(p_start + 1, p_start + leftNum, in_start, midInx - 1);
        root.right = helper(p_start + leftNum + 1, p_end, midInx + 1, in_end);
        return root;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};