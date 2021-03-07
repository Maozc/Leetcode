// 637 二叉树的层平均值
// 102 二叉树的层序遍历
// 思路：借助辅助“队列”，实现 BFS广度优先遍历
// 时间复杂度：O(n)
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 637
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let queue = [];  // 辅助队列
  let res = [];
  queue.push(root);
  while (queue.length) {
    const levelCounts = queue.length;
    let levelSum = 0;
    for (let i = 0; i < levelCounts; i++) {
      let curNode = queue.shift();
      levelSum += curNode.val;
      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
    res.push(levelSum / levelCounts);
  }
  return res;
};

// 102 
var levelOrderBottom = function (root) {
  if(!root){return []};
  let queue = [];  // 辅助队列
  let res = [];
  queue.push(root);
  while (queue.length) {
    const levelCounts = queue.length;
    let levelArr = [];
    for (let i = 0; i < levelCounts; i++) {
      let curNode = queue.shift();
      levelArr.push(curNode.val);
      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
    res.push(levelArr);
  }
  return res;
};

Function.prototype.call = funciton _call(context, ...params){
// 非严格模式: 不传或传递为Null/Undefined的情况进行时，this指向window
//           其余值，使用Object()进行类包装
context == undefined ? context = window : null;
if(!/^(object|function)$/.test(typeof context)){
context = Object(context);
}
// 临时属性名
let key = Symbol('KEY');
let result;
// 绑定属性值，并执行函数，返回函数执行结果
context[key] = this;
result = context[key](...params);
// 删除临时属性
delete context[key]
return result;
}
