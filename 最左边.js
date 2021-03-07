var findBottomLeftValue = function (root) {
    if (root == null) return root.val;
    let queue = [];
    queue.push(root);
    let res;
    while (queue.length) {
        let front = queue.shift();
        res = front.val;
        if (front.right)
            queue.push(front.right);
        if (front.left)
            queue.push(front.left);
    }
    return res;
};