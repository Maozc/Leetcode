/**
 * @param {string} s
 * @return {number}
 */

/* 1.数组作滑动窗口 */
var lengthOfLongestSubstring = function (s) {
    let win = [], maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i]);
        if (index !== -1) {
            arr.splice(0, index + 1);
        }
        arr.push(s.charAt(i));
        maxLen = Math.max(maxLen, arr.length);
    }
    return maxLen;
};

/* 2.map优化滑动窗口*/
var lengthOfLongestSubstring = function (s) {
    let winMap = new Map(),
        maxLen = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (winMap.has(s[j])) {
            i = Math.max(winMap.get(s[j]) + 1, i);
        }
        maxLen = Math.max(maxLen, j - i + 1);
        winMap.set(s[j], j)
    }
    return maxLen;
};