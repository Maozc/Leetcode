/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s[0] == 0)  // 异常处理
        return 0;
    let dp = [1, 1] // [上上位,上位]解码方法数
    let len = s.length;
    for (let i = 1; i < len && dp[i]; i++) {
        dp[i + 1] =
            (s[i] != '0' ? dp[i] : 0) +
            (s[i - 1] != '0' && parseInt(s[i] + s[i - 1]) <= 26 ? dp[i - 1] : 0)
    }
    return dp.length == n + 1 ? dp[n] : 0;
};