/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length ===1)
        return nums[0];
    let curSum = nums[0];
    let res = nums[0];
    for(let i =1;i<nums.length;i++){
        if(curSum > 0){ // 只要收益仍未正,即使新加入的元素是负的,也可以接受,因为每一次遍历都有res记录之前的最大收益
            curSum+=nums[i];
        }else{
            curSum = nums[i]
        }
        res = Math.max(res,curSum);
    }
    return res;
};