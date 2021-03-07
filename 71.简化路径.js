/**
 * @param {string} path
 * @return {string}
 * 
 * 
 * 路径必须始终以斜杠 / 开头;
 * 并且两个目录名之间必须只有一个斜杠 /;
 * 最后一个目录名（如果存在）不能以 / 结尾;
 * 规范路径必须是表示绝对路径的最短字符串
 * 
 *   将path以'/'分割成数组，入栈操作
 *     + 遇到 . 或者为空时，不修改当前 stack。
 *     + 遇到 .. 时，stack 弹出最近一个路径
 *   
 *   最后返回 '/' + stack.join('/') 为新的路径
*

 */
var simplifyPath = function(path) {
    let stack = [], 
    pathArr = path.split('/');

    for (const item of pathArr) {
        if(item === '' || item === '.'){
            continue;
        }else if(item === '..'){
            stack.pop();
        }else{
            stack.push(item);
        }
    }

    return `/${stack.join('/')}`;
};