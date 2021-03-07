/**
 * @param {string} s
 * @return {string}
 */

/* 动态规划 
        延伸:如果一个字符串是回文串，那么在它左右分别加上一个相同的字符，那么它一定还是一个回文串
*/
var longestPalindrome = function (s) {
    if (s.length === 0 || !s)
        return "";
    let res = s[0];
    let dp = [];
    // 倒着遍历,dp[i][..]依赖于dp[i+1][..]
    for (let i = s.length - 1; i >= 0; i--) {
        dp[i] = [];
        for (let j = i; j < s.length; j++) {
            if (j - i === 0)    // a情况
                dp[i][j] = true;
            else if (j - i === 1 && s[i] === s[j])  // aa情况
                dp[i][j] = true;
            else if (s[i] === s[j] && dp[i + 1][j - 1]) // 状态方程
                dp[i][j] = true;

            if (dp[i][j] && (j - i + 1) > res.length) {   // 更新结果
                res = s.slice(i, j + 1);
            }
        }
    }
    return res;
};

/* 暴力法 */
var longestPalindrome = function (s) {
    let ans = '';
    let max = 0;
    let len = s.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
            let tempStr = s.substring(i, j);
            if (isPalindrome(tempStr) && tempStr.length > max) {
                max = tempStr.length;
                ans = tempStr;
            }
        }
    }
    return ans;
};

function isPalindrome(str) {
    const len = str.length;
    let mid = parseInt(len / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] != str[len - i - 1]) {
            return false;
        }
    }
    return true;
}
