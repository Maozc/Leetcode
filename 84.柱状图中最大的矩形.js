/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 * 
 * 解法一：单调栈法
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights.length == 1) { return 0 }
    if (heights.length == 1) { return heights[0] };

    let incStack = [-1];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        // 1 < undefined  --> false 
        while (heights[i] < heights[incStack[incStack.length - 1]]) {
            let cur = incStack.pop();
            // 每一个矩形的宽都是 (新元素 - 栈中下元素 - 1) 
            const curArea = heights[cur] * (i - incStack[incStack.length - 1] - 1);
            maxArea = Math.max(maxArea, curArea)
        }
        incStack.push(i);
    }
    //  处理剩余单调栈中的元素，栈底元素特殊处理
    // 因为单调栈是递增的，这里假设最右边还有一个高度为0的矩形;
    let len = heights.length;
    while (incStack.length > 2) {
        let cur = incStack.pop();
        let curArea = heights[cur] * (len - incStack[incStack.length - 1] - 1);
        maxArea = Math.max(maxArea, curArea)
    }

    curArea = heights[incStack[1]] * heights.length;
    maxArea = Math.max(maxArea, curArea);
    return maxArea;
};

let arr = [2, 1, 5, 6, 2, 3];
largestRectangleArea(...arr);
// @lc code=end


