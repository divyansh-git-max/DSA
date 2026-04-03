var hasCycle = function (head) {
    let curr = head;
    let seenN = new Set();

    while (curr != null) {
        if (seenN.has(curr)) {
            return true;
        } else {
            seenN.add(curr);
            curr = curr.next;
        }

    }
    return false;
};

