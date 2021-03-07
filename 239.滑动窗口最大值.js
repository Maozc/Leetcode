/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 // 双端队列法
var maxSlidingWindow = function(nums, k) {
    if(nums == []) return [];
    if(k ===  1) return nums;
    const deque = [];   // 存储元素下标
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        // 当window内的元素大于K时，移除队首元素
        if (i - deque[0] >= k) {
            deque.shift();
        }    
        // 移除deque中比当前元素小的所有元素，它们不可能是最大的
        while(nums[ deque[deque.length-1] ] <= nums[i]){
            deque.pop()
        }
        deque.push(i);
        // 从第k次遍历开始，向res中添加deque队首元素所对应的元素
        if(i >= k-1){    // 0-3, 1-3, 2-3(开始添加), 3-3
            res.push(nums[deque[0]])
        }    
    }
    return res;
};

// 暴力法
var maxSlidingWindow = function(nums, k) {
    if(nums == []) return [];
    if(k === 1) return nums;
    const res = [];
    let win = [];
    for (let i = 0; i < nums.length; i++) {
        win.push(nums[i]);
        if(i >= k-1){
            res.push(Math.max(...win));
            win.shift()
        }        
    }
    return res;
};
// @lc code=end
