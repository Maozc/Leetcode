/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1.length === 0 || num2.length === 0) return '';

    let len1 = num1.length,
        len2 = num2.length,
        res = new Array(len1 + len2).fill(0);

    for (let i = len1-1; i >= 0; --i) {
        const char1 = +num1[i];
        for (let j = len2-1; j >= 0; --j) {
            const char2 = +num2[j];
            let mulRes = char1 * char2;
            
            const sum = res[i + j+1] + mulRes;
            res[i + j+1] = sum % 10;  // 取余
            res[i + j] += Math.floor(sum / 10) // 取整
        }
    }

    while (res[0] === 0) {
        res.shift();
    }

    return res.length !== 0 ? res.join('') : '0'
};

multiply('2','3');

