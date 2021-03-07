/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 快排
 */
var findKthLargest = function (nums, k) {
    let len = nums.length;
    nums = quick(nums);
    return nums[len - k];
};

var quick = function (arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        const lineInx = partition(arr, left, right);

        if (left < lineInx - 1) {
            quick(arr, left, lineInx - 1);
        }
        if (right > lineInx) {
            quick(arr, lineInx, right);
        }
    }
    return arr;
}

var partition = function (arr, left, right) {
    const pivotVlue = arr[Math.floor(left + (right - left) / 2)];

    let i = left;
    let j = right;

    while (i <= j) {
        while (arr[i] < pivotVlue)
            i++;
        while (arr[j] > pivotVlue)
            j--;
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    return i;
}

