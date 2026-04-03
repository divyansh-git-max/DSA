// optimized approachs of floyd algorithm

function hasCycle(head) {

    if (!head) {
        return false;
    }
    slow = head;
    fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;

}


// floyd algorithm

// time complexity O(n)
// space complexity O(1)