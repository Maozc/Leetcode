/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = [];

    const buildPath = (root, pathStr) => {
        if (root == null)
            return;
        if (root.left == null && root.right == null) {
            pathStr += root.val;
            res.push(pathStr);
            return;
        }
        pathStr += root.val + '->';
        buildPath(root.left, pathStr);
        buildPath(root.right, pathStr);
    }
    buildPath(root, '');
    return res;
};