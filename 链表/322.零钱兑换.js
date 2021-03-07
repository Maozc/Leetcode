/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 保存每个目标函数对应的最小的硬币个数
    const f = [];
    // 定义已知情况
    f[0] = 0;
    // 遍历[1,amount]区间的硬币总额
    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity;
        // let arr = [];   // 该数组中装的是f(36-C1)+1,f(36-C2)+1,f(36-C3)+1,
        // 遍历每个可用硬币的面额
        for (let c = 0; c < coins.length; c++) {
            if (i - coins[c] >= 0) {
                // 状态转移方程
                // arr.push(f[i - coins[c]] + 1)
                f[i] = Math.min(f[i], f[i - coins[c]] + 1)
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1;
    }
    return f[amount];
};