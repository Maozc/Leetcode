// 单链表反转
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 双指针法(迭代法)
function reverseList(head) {
  let pre = null;
  let cur = head;
  while(cur != null){
    let oldnext = cur.next;
    cur.next = pre;
    // cur 和 pre各进一格
    pre = cur;
    cur = oldnext;
  }
  return pre;
};

//递归法
function reverseList(head) {
  // 这一行可以省略，但加了更好理解，本质上是cur变化
  let cur = head;
  // 终止条件：测试用例只有一个节点，或递归到了尾节点
  if(!cur || !cur.next)
    return cur;
  
  let oldnext = cur.next;
  // 递归过程
  let reverseCur = reverseList(oldnext);
  
  // 递推公式
  cur.next = null;  // 断开
  oldnext.next = cur; // 反转
  
  return reverseCur;
};

// 栈方法
function reverseList(head) {
  let cur = head;
  let res = new ListNode(0);
  // 完成反转构造链表工作
  let temp = res;
  let stack = [];
  // 入栈
  while(cur){
    stack.push(cur.val);
    cur = cur.next;
  }
  // 出栈
  while(stack.length != 0){
    temp.next = new ListNode(stack.pop());
    temp = temp.next;
  }
  return res.next;
};