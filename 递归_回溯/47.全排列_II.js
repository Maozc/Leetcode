/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// nums中包含重复元素
// 是否使用过? 同层元素是否相同
var permuteUnique = function (nums) {
    let res = [];
    let len = nums.length;
    let usedMap = new Array(len).fill(false);
    const nums = nums.sort((a, b) => a - b);
    function dfs(path = []) {
        if (path.length === len) {
            res.push(path.slice())  // 拷贝一份path,加入结果集
            return;
        }

        for (let i = 0; i < len; i++) {
            let num = nums[i];
            if ((num === nums[i - 1] && i - 1 > 0) && !usedMap[i - 1]) {    // !usedMap[i-1]的意思是:同层中,即使和前一个元素相同,
                // 但如果前一个元素未使用过,依然可以使用
                continue;
            }
            if (usedMap[i]) {   // 占位:标记每个位置的元素是否使用过
                continue;
            }
            path.push(num);
            usedMap[i] = true;
            dfs(path);
            path.pop();
            usedMap[i] = false;
        }
    }
    dfs([]);
    return res;
};