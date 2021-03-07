/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let charA = 'a'.charCodeAt(0);
    if (s.length !== t.length) return false;
    let hash = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - charA]++;
    }

    for (let i = 0; i < t.length; i++) {
        hash[t.charCodeAt(i) - charA]--;
        if (hash[t.charCodeAt(i) - charA] < 0 ) {
            return false
        }
    }
    return true;
};
// @lc code=end