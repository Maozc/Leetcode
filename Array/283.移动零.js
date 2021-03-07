/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 思路: 前后双指针，j指针永远标记0的位置，只要i位置不为0，即前移
 */
var moveZeroes = function (nums) {
    let j = 0;  // 标记0的开始位置

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            if (i != j) {
                nums[i] = 0
            }
            j++
        }

    }

    return nums
};