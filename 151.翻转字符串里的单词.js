/**
 * @param {string} s
 * @return {string}
 * 
 * 输入："a good   example!"
   输出："example! good a"
 */
var reverseWords = function (s) {
    // let res = '';
    // let sArr = s.trim().split(' ');
    // sArr = sArr.filter((item) => item !== '').reverse();
    // return sArr.join('');

    let left = 0,
        right = s.length - 1,
        word = '',
        queue = [];
    while (s.charAt(left) === ' ') left++;
    while (s.charAt(right) === ' ') right++;

    while (left <= right) {
        let char = s.charAt(left);
        if (char === ' ' && word) {
            queue.unshift(word);
            word = '';
        } else if (char !== ' ') {
            word += char;
        }
        left++;
    }
    queue.unshift(word);
    return queue.join(' ');
};