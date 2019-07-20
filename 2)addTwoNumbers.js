var addTwoNumbers = function(l1, l2) {
    if (l1 == null || (l1.val == 0 && l1.next == null)) return l2;
    if (l2 == null || (l2.val == 0 && l2.next == null)) return l1;
    let carry = 0;
    let dummy = new ListNode(null);
    let prev = dummy;
    while (l1 && l2) {
        let sum = l1.val + l2.val + carry;
        if (sum >= 10) {
            sum = sum % 10;
            carry = 1;
        } else {
            carry = 0;
        }
        prev.next = new ListNode(sum);
        prev = prev.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1) {
        let sum = (carry + l1.val);
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        prev.next = new ListNode(sum);
        prev = prev.next;
        l1 = l1.next;
    }
    while (l2) {
        let sum = carry + l2.val;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        prev.next = new ListNode(sum);
        prev = prev.next;
        l2 = l2.next;
    }
    console.log( carry);
    if (carry == 1) {
        prev.next = new ListNode(1);
    }
    return dummy.next;
};

