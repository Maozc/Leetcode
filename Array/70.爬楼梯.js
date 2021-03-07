/**
 * @param {number} n
 * @return {number}
 * 
 * 思路：斐波那契数列(数学推导)
 *       或 动态规划
 */
var climbStairs = function (n) {
    if (n <= 1)
        return 1
    let fib1 = 1;
    let fib2 = 1;
    let res = 0
    for (let i = 2; i <= n; i++) {
        res = fib1 + fib2;
        fib1 = fib2;
        fib2 = res
    }
    return res;
};