/**
 * @param {number[]} T
 * @return {number[]}
 * 
 * 单调栈
 */
var dailyTemperatures = function (T) {
    if (T.length === 1) return 0;

    let stack = [],
        res = new Array(T.length).fill(0);

    for (let i = 0; i < T.length; i++) {
        let slen = stack.length
        while (stack.length && T[i] > T[stack[slen - 1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i);
    }
    return res;
};