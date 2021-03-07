/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// nums中没有重复元素
var permute = function (nums) {
    let res = [];
    let usedMap = new Map();

    function dfs(path = []) {
        if (path.length === nums.length) {
            res.push(path.slice())  // 拷贝一份path,加入结果集
            return;
        }
        for (const num of nums) {
            if (usedMap.has(num))
                continue;
            path.push(num);
            usedMap.set(num, num);
            dfs(path);  // 递归遍历
            path.pop();  // 回退
            usedMap.delete(num);    // 撤销记录
        }
    }
    dfs([]);
    return res;
};