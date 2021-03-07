/*
 * [14] 最长公共前缀
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

/* 横向扫描法 */
/* var longestCommonPrefix = function(strs) {
    if(strs.length === 0 ) return '';
    let ans = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < ans.length || j < strs[i].length; j++) {
            if (ans.charAt(j) !== strs[i].charAt(j))
                break;          
        }
        ans = ans.substring(0,j);
        if (ans === '') return '';
    }
    return ans
}; */

/* 分治法 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    return lcPreFixRec(strs)
};

// 分裂直至数组项为1
var lcPreFixRec = function (arr) {
    let len = arr.length;

    if (len === 1) {
        return arr[0]
    }
    let mid = Math.floor(len / 2),
        leftArr = arr.slice(0, mid),
        rightArr = arr.slice(mid, len);

    return lcPreFixTwo(lcPreFixRec(leftArr), lcPreFixRec(rightArr));
}

var lcPreFixTwo = function (str1, str2) {
    let j = 0;
    for (; j < str1.length || j < str2.length; j++) {
        if (str1.charAt(j) !== str2.charAt(j))
            break;
    }
    return str1 = str1.substring(0, j);
}
// 求两个字符串的最长前缀
// @lc code=end
