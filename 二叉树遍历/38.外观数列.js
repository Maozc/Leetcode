/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    // key:几个; value:xx
    // 分割
    if (n == 1)
        return n.toString();

    let s = '1';
    for (let i = 1; i < n; i++) {
        //  \num 匹配 num，num是一个正整数。对所获取的匹配的引用。
        //  例如，'(.)\1' 匹配两个连续的相同字符。
        s = s.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
    }
    return s;
};