/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let radix = 0;
    let operand = 0;
    let stack = [];

    for (let i = s.length - 1; i >= 0; --i) {
        const char = s.charAt(i);
        if (/\d/.test(char)) {
            operand += Math.pow(10, radix) * (char - 0);
            radix += 1;
        } else if (char !== ' ') {
            // 将类似'123'之类的数计算后的结果压入栈中
            if (radix !== 0) {
                stack.push(operand);
                operand = 0;
                radix = 0;
            }
            // 计算一次 '(x+y..)'中的内容
            if (char === '(') {
                const res = evaluateExpr(stack);
                stack.pop();
                stack.push(res);
            } else {
                stack.push(char);
            }
        }
    }

    if (radix !== 0) {
        stack.push(operand)
    }
    return evaluateExpr(stack);
};

var evaluateExpr = function (stack) {
    let res = 0;
    if (stack.length !== 0) {
        res = stack.pop();
    }
    while (stack.length !== 0 && stack[stack.length - 1] !== ')') {
        const char = stack.pop();
        if (char === '+') {
            res += Number(stack.pop());
        } else {
            res -= Number(stack.pop());
        }
    }
    return res;
}


class A {
    a = () => {
        console.log(this);
        return this;
    }
    b () {
        console.log(this);
    }
}

let aa =  new A();
let that = aa.a();
aa.b();


