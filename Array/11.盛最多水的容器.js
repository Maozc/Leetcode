/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

/**
 * @param {number[]} height
 * @return {number}
 * 
 * 思路: 左右双指针法 
 */
var maxArea = function (height) {
    let maxarea = 0;
    let i = 0, j = height.length - 1;
    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        maxarea = Math.max(area, maxarea);
        if (height[i] < height[j])
            i++;
        else
            j--;
    }

    return maxarea;
};
// @lc code=end