/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 滑动窗口
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    let sum = 0;
    let i = 0,  // 左窗口
        j = 0;  // 右窗口

    while (j < nums.length) {
        sum += nums[j];
        while (sum >= target) {    // 间隙性收缩:要求最小,没必要一直扩
            minLength = Math.min(minLength, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return minLength === Infinity ? 0 : minLength;
};

