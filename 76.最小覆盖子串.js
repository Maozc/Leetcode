/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * 
 * 滑动窗口解决
 */
var minWindow = function (s, t) {
    let minLen = Infinity;
    let missingType = 0;
    let resL;
    const map = {};

    for (const ch of t) {
        if (map[ch] === undefined) {
            missingType++;
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }

    let left = right = 0;
    for (; right < s.length; right++) {
        const rChar = s[right];
        if (map[rChar] !== undefined) map[rChar]--;
        if (map[rChar] == 0) missingType--;

        while (missingType == 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                resL = left;
            }
            const lChar = s[left];
            if (map[lChar] !== undefined) map[lChar]++;
            if (map[lChar] > 0) missingType--;
            left++;
        }
    }
    return s.substring(resL, resL + minLen);
};