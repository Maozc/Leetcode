/*
 * @lc app=leetcode.cn id=567 lang=javascript
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 滑动窗口 + Hash表:记录子字符串各个字母出现的次数
var checkInclusion = function (s1, s2) {
    let needHash = {},
        win = {}
    left = 0,
        right = 0;
    for (const i of s1) {
        needHash[i] = (needHash[i] || 0) + 1;
    }

    while (right < s2.length) {
        let c = s2.charAt(right);
        win[c] = (win[c] || 0) + 1;
        right++;
        if (right - left > s1.length) {
            let d = s2.charAt(left);
            left++;
            if (win[d] > 1) {
                win[d]--;
            } else {
                delete win[d];
            }
        }
        if (objIsEqual(needHash, win)) {
            console.log(win)
            return true;
        }
    }
    return false;

};

var objIsEqual = function (obj1, obj2) {
    for (const k in obj1) {
        if (obj1[k] !== obj2[k]) {
            return false;
        }
    }
    return true;
}

checkInclusion("ab", "eidboaoo");
// @lc code=end


