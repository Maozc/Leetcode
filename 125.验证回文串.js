/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let regArr = s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g);
    if (!regArr) return true;
    s = regArr.join('');
    let len = s.length;
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[len - i - 1])
            return false;
    }
    return true;
};
