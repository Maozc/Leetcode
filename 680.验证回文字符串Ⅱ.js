/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    const len = s.length;
    let i = 0, j = len - 1;
    while (i <= j && s[i] === s[j]) {
        i++;
        j--;
    }
    // 尝试跳过左指针,验证字符串是否回文
    if (isPalindrome(i + 1, j)) {
        return true
    }
    // 尝试跳过右指针,验证字符串是否回文
    if (isPalindrome(i, j - 1)) {
        return true;
    }
    return falsel
};

/**
 * @param  number st:start
 * @param  number ed:start
 */
function isPalindrome(st, ed) {
    while (st < ed) {
        if (s[st] !== s[ed])
            return false;
        st++;
        ed--;
    }
    return true;
}