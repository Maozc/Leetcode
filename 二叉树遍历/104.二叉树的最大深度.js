/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 * 
 * 递归写法
 */
var maxDepth = function (root) {
    if (root === null) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    return 1 + Math.max(leftMaxDepth, rightMaxDepth)
};

/* BFS：广度优先 */
var maxDepth = function (root) {
    if(root === null) return 0;
    const queue = [root];
    let depth = 1;
    while (queue.length) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            if (cur.left !== null)
                queue.push(cur.left);
            if (cur.right !== null)
                queue.push(cur.right);
        }

        if (queue.length)
            depth++;
    }
    return depth;
};

