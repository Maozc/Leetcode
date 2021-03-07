/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 每一次都要从已排好序的头开始遍历 
var insertionSortList = function (head) {
   let dummyHead = new ListNode(Number.MIN_SAFE_INTEGER),
       pre = dummyHead,
       cur = head;

   while (cur !== null) {
       // 保存cur.next，防止后面的操作，丢失该节点
       let temp = cur.next;

       while (pre.next !== null && pre.next.val < cur.val)
           pre = pre.next;

       // 这一步相当于先把cur节点从原有位置移除，然后再插入到合适位置
       cur.next = pre.next;
       pre.next = cur;
       cur = temp;  // 移动cur到下一个节点
       pre = dummyHead; // 恢复pre的位置，确保从已顺序队列的头开始遍历
   }

   return dummyHead.next;
};

*/

/* 优化:没必要每一次都从已排好序的头开始遍历 
 *      可以增加tail尾结点作为哨兵节点,其是已排好序链表的尾结点
*/
var insertionSortList = function (head) {
    let dummyHead = new ListNode(Number.MIN_SAFE_INTEGER),
        pre = dummyHead,
        tail = dummyHead,
        cur = head;

    while (cur !== null) {

        if (tail.val < cur.val) {
            tail.next = cur;
            tail = cur;
            cur = cur.next;
        } else {
            // 保存cur.next，防止后面的操作，丢失该节点
            let temp = cur.next;
            tail.next = temp;

            while (pre.next !== null && pre.next.val < cur.val)
                pre = pre.next;

            // 这一步相当于先把cur节点从原有位置移除，然后再插入到合适位置
            cur.next = pre.next;
            pre.next = cur;
            cur = temp;  // 移动cur到下一个节点
            pre = dummyHead; // 恢复pre的位置，确保从已顺序队列的头开始遍历
        }

    }

    return dummyHead.next;
};