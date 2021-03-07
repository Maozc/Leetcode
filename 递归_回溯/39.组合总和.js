/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];

    function dfs(path = [], curSum, startInd = 0) {
        // 递归出口
        if (curSum >= target) {
            if (curSum === target) {
                res.push(path.slice()); // path的拷贝
            }
            return;
        }

        for (let i = startInd; i < candidates.length; i++) {
            let num = candidates[i];
            path.push(num);
            dfs(path, curSum + num, i); // 保证不再遍历之前的数,这里传i进去,很巧妙
            path.pop();
        }
    }
    dfs([], 0, 0);
    return res;
};