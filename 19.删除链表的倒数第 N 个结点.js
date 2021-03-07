/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/* 
    链表题目中:反复遍历,涉及相对复杂的链表操作:如反转 指定位置的删除...
    快慢指针:同一方向,一快一慢
    dummy节点:解决头结点为空的边界问题,涉及节点删除的题目都建议使用
        let dummy = new Node();
        dummy.next = head;
*/

// 倒数第n个,可转换为正数第 len-n+1个,因此len很关键;  两个指针间的差距; 到哪停:到正数第len-n停下
var removeNthFromEnd = function (head, n) {
    // 初始化dummy节点
    const dummy = new ListNode();
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    // 快指针先走n步
    while (n !== 0) {
        fast = fast.next;
        n--;
    }
    // 快慢指针一起走
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};

/*  删除排序链表中的所有重复的元素 */
var deleteDuplicates = function (head) {
    if (!head || !head.next)
        return head;
    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            // 第二个节点之后可能还有相同,继续遍历
            let val = cur.next.val;
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};

/* 83.删除排序链表中的重复的元素 */
var deleteDuplicates = function (head) {
    if (!head)
        return head;
    let cur = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            // 第二个节点之后可能还有相同,继续遍历
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    };
    return head;
}