/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 判断数组是否为空
    if (nums1.length === 0)
        return nums2;
    if (nums2.length === 0)
        return nums1;
    let i = m - 1,
        j = n - 1,
        len = m + n - 1;
    while (i >= 0 && j >= 0) {
        // 取两数组中最大的值填充到末尾
        if (nums1[i] >= nums2[j]) {
            nums1[len] = nums1[i];
            i--;
            len--;
        } else {
            nums1[len] = nums2[j];
            j--;
            len--;
        }
    }
    // nums1已遍历完,剩余nums2
    while (j >= 0) {
        nums1[len] = nums2[j];
        j--;
        len--;
    }
};