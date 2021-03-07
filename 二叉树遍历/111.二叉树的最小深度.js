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
 * BFS:广度优先遍历
 */
var minDepth = function (root) {
    if (root === null) return 0;
    const queue = [root];
    let depth = 1;
    while (queue.length) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const cur = queue.shift();
            if (cur.left === null && cur.right === null)
                return depth;
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

/* DFS:深度优先 

    此版本效率不高，不要先遍历，先用条件过滤掉一部分
*/
var minDepth = function (root) {
    if (root === null) return 0;
    let depth = 0;

    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);
    if (leftDepth > 0 && rightDepth > 0) {
        return depth = 1 + Math.min(leftDepth, rightDepth)
    } else if (leftDepth > 0) {
        return depth = 1 + leftDepth;
    } else if (rightDepth > 0) {
        return depth = 1 + rightDepth;
    } else {
        return 1;
    }
};

var minDepth = function (root) {
    if (root === null) return 0;
    let depth = Number.MAX_SAFE_INTEGER;

    if (root.left) {
        depth = Math.min(depth, minDepth(root.left) + 1);
    }
    if (root.right) {
        depth = Math.min(depth, minDepth(root.right) + 1);
    }
    if (root.left === null && root.right === null) {
        depth = 1;
    }
    return depth
};

var minDepth = function (root) {
    if (root === null) return 0;
    let depth = Number.MAX_SAFE_INTEGER;

    if (!root.left && !root.right) {
        return 1;
    }
    if (root.left && !root.right) {
        return minDepth(root.left) + 1;
    }
    if (!root.left && root.right) {
        return minDepth(root.right) + 1;
    }

    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
