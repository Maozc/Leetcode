/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length === 0)
        return 0;
    if (nums.length === 1)
        return 1;
    let curLen = 1;
    let maxLen = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            curLen++;
        } else {
            curLen = 1;
        }
        maxLen = Math.max(maxLen, curLen);
    }
    return maxLen;
};