/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 要求:空间复杂度应为 O(1)，时间复杂度应为 O(nodes)
var oddEvenList = function (head) {
    if (head == null) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;    // 偶链头

    while (even != null && even.next != null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};